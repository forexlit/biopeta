import { Navigation } from "@/views/Navigation";
import React, { useState } from "react";
import { PRODUCTS } from "@/content/products";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import Head from "next/head";
const Sorry = () => {
  const [selectedOption, setSelectedOption] = useState(PRODUCTS[0].options[0]);
  const router = useRouter();
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  const handleBuyNow = () => {
    router.push(selectedOption.orderUrl);
  };

  return (
    <>
      <Head>
        <title>Biopeta.com - Sorry Out Of Stock</title>
        <meta name="description" content="Cortiway Premium Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container mx-auto">
        {" "}
        <div className="mb-5 flex items-center justify-center">
          <Navigation />
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-6">
            <div>
              <h3 className="text-center font-semibold text-2xl mb-5">
                Sorry! Our Free Offer Just Sold Out...
              </h3>
            </div>
            <div className="col-span-12 md:col-span-5 opacity-60">
              <div className="border-2 border-gray-200 bg-gray-50 p-5 rounded-xl  grid grid-cols-12 gap-2">
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
                    <span className="text-gray-500">SOLD OUT!</span>
                  </h3>
                  {/* <div className="flex">
                  <h3 className={`text-3xl font-semibold ${"text-red-600"}`}>
                    $ 0.00
                  </h3>

                  <span className="text-gray-500 ml-1 line-through text-lg">
                    ${PRODUCTS[0].options[0].oldPrice}
                  </span>
                </div> */}
                  <div className="mt-2 border-t text-sm pt-2">
                    We're so confident you'll enjoy Cortiway Premium that
                    <strong> we'll bear all the risk</strong>.
                  </div>
                  <div className=" mt-5">
                    <span className="bg-red-100 border border-red-300 text-red-500 px-2 text-sm">
                      Sold Out
                    </span>
                  </div>
                  <div className="bg-gray-100 h-2 w-full rounded-xl flex justify-end mt-2">
                    <div className="h-2 w-1 bg-red-600 rounded-r-xl"></div>
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-red-500">
                    0 items left!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 p-0  md:p-10">
            <div>
              <h3 className="font-semibold text-xl text-center mt-5">
                You can still try Cortiway Premium{" "}
                <span className="text-pink-600">
                  risk-free with our 100% money-back guarantee{" "}
                </span>{" "}
                — now with discounts up to 51% off!
              </h3>
            </div>
            <div className="mt-5">Buying Options:</div>
            <div className="grid grid-cols-12 gap-2 mt-5">
              {PRODUCTS.map((product, index) => {
                return (
                  <div
                    className="col-span-12 relative cursor-pointer "
                    key={index}
                    onClick={() => handleSelectOption(product.options[0])}
                  >
                    <div
                      className={`absolute left-10 text-xs font-semibold min-w-[90px] text-center ${
                        product.id === 2 && "bg-green-400"
                      } ${
                        product.id === 1 && "bg-yellow-400"
                      } top-[-5px] rounded px-1 `}
                    >
                      {product.badge}
                    </div>
                    <div
                      className={`bg-white  border-2 ${
                        product.popular ? " bg-[#fffae8]" : "bg-gray-50"
                      }} p-3 rounded-xl hover:bg-gray-50 ${
                        selectedOption.optionId ===
                          product.options[0].optionId && "border-black"
                      }`}
                    >
                      <div className="grid grid-cols-12 gap-2 ">
                        <div className="col-span-1 flex items-center">
                          <div
                            className={`w-4 md:w-6 h-4 md:h-6 rounded-full border ${
                              selectedOption.optionId ===
                                product.options[0].optionId && "border-black"
                            } flex items-center justify-center`}
                          >
                            <div
                              className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${
                                selectedOption.optionId ===
                                  product.options[0].optionId && "bg-black"
                              }`}
                            ></div>
                          </div>
                        </div>
                        <div className="col-span-3">
                          <Image
                            src={product.options[0].image}
                            alt="Cortiway Premium"
                            width={80}
                            height={80}
                            className=""
                          />
                        </div>
                        <div className="col-span-5">
                          <span className="font-semibold text-sm md:text-lg">
                            Cortiway Premium
                          </span>
                          <span className="text-xs md:text-[15px] block">
                            {product.subtitle}
                          </span>
                        </div>
                        <div className="col-span-3">
                          <div className="">
                            <div className="md:flex">
                              {product.options[0].price && (
                                <>
                                  <h3
                                    className={`text-xl md:text-2xl font-semibold ${
                                      product.options[0].oldPrice !==
                                      product.options[0].price
                                        ? "text-red-600"
                                        : ""
                                    }`}
                                  >
                                    <span
                                      className={`text-xl mr-0.5 font-semibold ${
                                        product.options[0].oldPrice !==
                                        product.options[0].price
                                          ? "text-red-500"
                                          : ""
                                      }`}
                                    >
                                      $
                                    </span>
                                    {product.options[0].price}
                                  </h3>
                                  {product.options[0].oldPrice !==
                                    product.options[0].price && (
                                    <span className="text-gray-500 ml-1 line-through text-xs block">
                                      ${product.options[0].oldPrice}
                                    </span>
                                  )}
                                </>
                              )}
                            </div>
                            <span className="text-gray-500 block text-xs">
                              / per bottle
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="my-5 mb-10 ">
              <Button bg="#db2877" type="buy" onClick={handleBuyNow}>
                Continue to payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorry;
