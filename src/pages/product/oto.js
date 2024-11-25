import React from "react";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/content/products";
import Head from "next/head";

const Oto = () => {
  const handleCheckout = () => {
    const productUrl = "https://buy.stripe.com/00g16f4Cl8q7gFy28k";
    window.open(productUrl, "_blank");
  };
  return (
    <>
      <Head>
        <title>Biopeta.com - One Time Offer!</title>
        <meta name="description" content="Cortiway Premium Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="p-2 md:p-5">
        <div className="container mx-auto bg-white rounded-xl border-2 border-dashed border-pink-600">
          <div className="p-1 md:p-10 py-5">
            <h3 className="text-4xl text-center font-semibold pb-5">
              <span className="text-pink-600">
                Wait!
                <br />
              </span>{" "}
              We have an Exclusive Offer For You
            </h3>
            <p className="text-lg font-semibold">
              Achieve Long-Lasting Results with a 3-Month Supply of Cortiway
              Premium!
            </p>
            <p className="font-semibold my-2">Why 3 Months?</p>
            <p>
              While the first month brings noticeable improvements, a 3-month
              supply allows your body to fully absorb Cortiway Premium’s natural
              ingredients, ensuring:{" "}
            </p>
            <ul className="mt-2">
              <li>✅ an additional 20-25lbs can be lost</li>
              <li>✅ the weight you’ve shed stays off</li>
              <li>✅ bloating doesn’t return</li>
            </ul>

            <p className="mt-3 font-semibold">
              Take advantage of this limited-time discount to secure two
              additional bottles at a special price:
            </p>
            <div className="grid grid-cols-12 gap-2 mt-5">
              <div className="col-span-12 md:col-span-5">
                <div className="border-2 border-gray-300 p-5 rounded-xl bg-white grid grid-cols-12 gap-2">
                  <div className="col-span-4 text-center ">
                    <span className="font-semibold">1 Bottle</span>
                    <Image
                      src={PRODUCTS[2].options[0].image}
                      alt="Product"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="col-span-8">
                    <h3 className="font-semibold text-xl mb-1">
                      <span className="text-pink-600">FREE</span>
                    </h3>
                    <div className="flex">
                      <h3
                        className={`text-3xl font-semibold ${"text-red-600"}`}
                      >
                        $ 0.00
                      </h3>

                      <span className="text-gray-500 ml-1 line-through text-lg">
                        ${PRODUCTS[0].options[0].oldPrice}
                      </span>
                    </div>
                    <div className="mt-2 border-t text-sm pt-2">
                      We're so confident you'll enjoy Cortiway Premium that
                      <strong> we'll bear all the risk</strong>.
                    </div>
                    <div className=" mt-5">
                      <span className="bg-red-100 border border-red-300 text-red-500 px-2 text-sm">
                        Almost sold out
                      </span>
                    </div>
                    <div className="bg-gray-100 h-2 w-full rounded-xl flex justify-end mt-2">
                      <div className="h-2 w-5 bg-red-600 rounded-r-xl"></div>
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-red-500">
                      4 items left!
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-1 flex items-center justify-center">
                <span className="text-5xl font-semibold">+</span>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="border-2 border-pink-600 p-5 rounded-xl bg-pink-50 grid grid-cols-12 gap-2">
                  <div className="col-span-4 text-center ">
                    <span className="font-semibold">2 Bottles</span>
                    <Image
                      src="/product/2.png"
                      alt="Product"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="col-span-8 ">
                    <h3 className="font-semibold text-xl mb-1">
                      <span className="text-pink-600">2 X</span>
                    </h3>
                    <span className="bg-red-500 text-white font-semibold px-2 rounded">
                      - 28% OFF
                    </span>
                    <div className="flex">
                      <h3
                        className={`text-3xl font-semibold ${"text-red-600"}`}
                      >
                        $ 49.99
                      </h3>

                      <span className="text-gray-500 ml-1 line-through text-lg">
                        ${PRODUCTS[0].options[0].oldPrice}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">/ per bottle</span>
                    {/* <div className="mt-5">Save </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="border mt-5 rounded-lg bg-gray-50 px-5">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="col-span-4 font-medium py-2">
                      Subtotal (3 items):
                    </td>
                    <td className="col-span-8 text-right">$209.97</td>
                  </tr>
                  <tr className="border-b">
                    <td className="col-span-4 font-medium py-2 text-red-600">
                      Discount:
                    </td>
                    <td className="col-span-8  text-right text-red-600">
                      - $110.10
                    </td>
                  </tr>
                  <tr className="">
                    <td className="col-span-4 font-medium py-2">Shipping:</td>
                    <td className="col-span-8  text-right">FREE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-5">
              <table className="w-full">
                <tbody className="">
                  <tr className="">
                    <td className="col-span-4 font-semibold py-2 text-xl">
                      Total:
                    </td>
                    <td className="col-span-8 font-semibold text-lg text-right text-xl">
                      $99.98
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mx-auto text-center mt-5">
              <Button className="mx-auto" onClick={handleCheckout}>
                Yes, continue with 3 bottles
              </Button>
              <div className="pt-5 pb-10 font-semibold text-lg underline">
                <Link href="/checkout"> No, I just want 1 FREE bottle </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oto;
