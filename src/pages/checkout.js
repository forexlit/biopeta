import React, { useState } from "react";
import { Button } from "@/components/Button";
import { Navigation } from "@/views/Navigation";
import Image from "next/image";
import { PRODUCTS } from "@/content/products";
import Link from "next/link";
import payment from "../assets/icons/security.png";
import Head from "next/head";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("United States");

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "last_name":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "postal_code":
        setPostalCode(value);
        break;
      default:
        break;
    }
  };

  const saveDataToDB = async () => {
    const data = {
      name,
      last_name: lastName,
      email,
      address,
      city,
      postal_code: postalCode,
      country,
      url: window.location.href,
    };
    try {
      const response = await fetch("/api/save-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  const continueToPayment = async () => {
    await saveDataToDB();
    window.location.href = "/checking";
  };
  return (
    <>
      <Head>
        <title>Biopeta.com - Checkout</title>
        <meta name="description" content="Cortiway Premium Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-white min-h-[100vh] pb-[80px]">
        <div className="container mx-auto">
          <div className="mx-auto flex items-center justify-center mb-5 md:mb-10">
            <Navigation />
          </div>
          <div className="mb-5 md:mb-10">
            <nav aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link href="/product/oto">
                    <span className="text-sm font-medium text-gray-700 hover:text-blue-600">
                      Special Offer
                    </span>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-400 mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link href="#">
                      <span className="text-sm font-semibold">Information</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-400 mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-500">
                      Payment
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 md:col-span-7 bg-white pr-0 md:pr-10">
              <h3 className="font-semibold text-2xl mb-5">Contact</h3>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First Name"
                    onChange={handleInputChanges}
                    className="w-full border p-3 rounded-md"
                  />
                </div>

                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    onChange={handleInputChanges}
                    className="w-full border p-3 rounded-md"
                  />
                </div>
                <div className="col-span-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleInputChanges}
                    className="w-full border p-3 rounded-md"
                  />
                </div>

                <div className="col-span-12 my-5">
                  <h3 className="font-semibold text-2xl">Shipping Address</h3>
                </div>

                <div className="col-span-12">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    onChange={handleInputChanges}
                    className="w-full border p-3 rounded-md"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    onChange={handleInputChanges}
                    className="w-full border p-3 rounded-md"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    placeholder="Postal code"
                    onChange={handleInputChanges}
                    className="w-full border p-3 rounded-md"
                  />
                </div>
                <div className="col-span-12">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="United States"
                    disabled
                    className="w-full border p-3 rounded-md"
                  />
                </div>

                <div className="col-span-12 mt-5 md:mt-10">
                  <Button onClick={continueToPayment} className="mx-auto">
                    Continue to payment
                  </Button>
                </div>
              </div>
              <div className="mt-5">
                <Image
                  src={payment}
                  alt="Payment"
                  height={25}
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 order-first md:order-none bg-gray-50 border p-5 md:p-8 mb-5 rounded-lg ">
              <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-3">
                  <Image
                    src="/product/1.jpg"
                    alt="Product"
                    width={100}
                    height={100}
                    className="rounded-lg mb-2"
                  />
                </div>
                <div className="col-span-7">
                  <h3 className="font-semibold text-lg">Cortiway Premium</h3>
                  <p>1-Month Supply</p>
                </div>
                <div className="col-span-2">
                  <h3 className="font-semibold mb-1">
                    <span className="text-pink-600 text-right">FREE</span>
                  </h3>
                  <div className="flex">
                    <h3 className="text-black md:text-xl text-right">$0.00</h3>
                  </div>
                </div>
              </div>

              <div className=" mt-5 rounded-lg">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="col-span-4 font-medium py-2">Subtotal:</td>
                      <td className="col-span-8 text-right">$69.99</td>
                    </tr>
                    <tr className="border-b">
                      <td className="col-span-4 font-medium py-2 text-red-500">
                        Discount:
                      </td>
                      <td className="col-span-8  text-right text-red-500">
                        - $69.99
                      </td>
                    </tr>
                    <tr className="">
                      <td className="col-span-4 font-medium py-2">
                        Shipping & handling:
                      </td>
                      <td className="col-span-8  text-right">$2.59</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-5">
                <table className="w-full">
                  <tbody className="">
                    <tr className="">
                      <td className="col-span-4 font-semibold py-2 text-xl">
                        Total:
                      </td>
                      <td className="col-span-8 font-semibold text-right text-3xl">
                        $2.59
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
