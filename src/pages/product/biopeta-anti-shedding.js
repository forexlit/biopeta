/* eslint-disable @next/next/next-script-for-ga */
import React, { useState, useEffect } from "react";
import { TopNavigation } from "@/components/TopNavigation";
import { Footer } from "@/views/Footer";
import Head from "next/head";
import { Button } from "@/components/Button";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Covered from "@/components/Covered";
import pumpkin from "../../assets/icons/pumpkin.svg";
import sale from "../../assets/icons/hot-sale.png";

import { PRODUCTS, WEIGHTLOSS } from "@/content/products";
import Product from "@/components/Product";
import Faq from "@/components/Faq";

import pr1 from "../../assets/products/biopeta/1.jpg";
import pr2 from "../../assets/products/colon/product-new.jpg";
import pr3 from "../../assets/products/colon/product-progress.jpg";
import pr4 from "../../assets/products/colon/product-symptoms.jpg";
import pr5 from "../../assets/products/colon/product-ingredients.jpg";
import pr6 from "../../assets/products/colon/product-reviews.jpg";

import gift from "../../assets/icons/gift.png";
import bowlIcon from "../../../public/icons/healthy.png";
import weightIcon from "../../../public/icons/weight.png";
import energyIcon from "../../../public/icons/hunger.png";
import starYellow from "../../assets/icons/star-yellow.svg";
import moneyBack from "../../assets/icons/money.png";
import { useRouter } from "next/router";
import shippingIcon from "../../assets/icons/shipping3.svg";
import deliveryIcon from "../../assets/icons/delivery.svg";
import moneyBackIcon from "../../assets/icons/money-back.svg";
import ReviewsWithProduct from "@/components/ReviewsWithProduct";
import exred from "../../assets/icons/letter-x.png";
import clinicallyImg from "../../assets/products/colon/clinically.jpg";
import WithFb from "../../components/proof/WithFb";
import WithAndWithout from "@/views/WithAndWithout";
import Ratings from "@/components/Ratings";
import natural from "../../assets/icons/product/natural.webp";
import alcohol from "../../assets/icons/product/alcohol.webp";
import paraben from "../../assets/icons/product/paraben.webp";
import sulfate from "../../assets/icons/product/sulfate.webp";
import cruelty from "../../assets/icons/product/cruelty.webp";
import silicone from "../../assets/icons/product/silicone.webp";

export default function Two() {
  const [selectedOption, setSelectedOption] = useState(PRODUCTS[0].options[0]);
  const router = useRouter();
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  const handleBuyNow = () => {
    router.push(selectedOption.orderUrl);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white">
      <Head>
        <title>Biopeta.com - Cortiway Premium Product</title>
        <meta name="description" content="Cortiway Premium Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-black text-white text-center p-2 flex items-center justify-center text-sm md:text-md">
        <div>
          <Image src={sale} alt="Sale" height={25} className="mr-4" />
        </div>
        <span>BLACK FRIDAY MONTH: </span>
        <strong className="ml-2"> UP TO -43% OFF!</strong>
      </div>
      <div className="py-0 md:py-5">
        <TopNavigation />
      </div>
      <div className="container mx-auto mt-0 md:mt-10">
        <div className="grid grid-cols-12 gap-4 pb-5">
          <div className="col-span-12 md:col-span-6 pr-0 md:pr-10">
            <h1 className="text-2xl md:text-5xl mb-1 md:mb-3 font-semibold">
              BioPeta Anti-Shedding Solution
            </h1>
            <Ratings />
            <h2 className="text-xl md:text-xl mt-5 mb-5">
              <strong>Try BioPeta Anti-Shedding Solution:</strong> Keep Your
              Home Fur-Free, Promote a Healthy, Shiny Coat, and Make Shedding a
              Thing of the Past!
            </h2>
            <div className="flex items-center my-5">
              <div className="mr-2 md:mr-3">
                <Image src={natural} alt="100% Natural" height={70} />
              </div>
              <div className="mr-2 md:mr-3">
                <Image src={paraben} alt="Paraben free" height={70} />
              </div>
              <div className="mr-2 md:mr-3">
                <Image src={cruelty} alt="Cruelty free" height={70} />
              </div>
              <div className="mr-2 md:mr-3">
                <Image src={alcohol} alt="Alcohol free" height={70} />
              </div>
              <div className="mr-2 md:mr-3">
                <Image src={sulfate} alt="Sulfate free" height={70} />
              </div>
              <div>
                <Image src={silicone} alt="Silicone free" height={70} />
              </div>
            </div>
            {/* <div className="">
              <div>
                <span className="pr-2">✅</span> Energy Boost in 1 to 7 days
              </div>
              <div>
                <span className="pr-2">✅</span> Starts shifting weight in 14 to
                30 days
              </div>
              <div>
                <span className="pr-2">✅</span> Reduces bloating in 5 to 7 days
              </div>
            </div> */}
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
                      className={`absolute left-5 text-xs font-semibold min-w-[90px] text-center uppercase ${
                        product.id === 2 && "bg-green-400"
                      } ${
                        product.id === 1 && "bg-yellow-400"
                      } top-[-5px] rounded px-1 `}
                    >
                      {product.badge}
                    </div>
                    <div
                      className={`border-2 ${
                        product.popular ? " bg-[#fffae8]" : "bg-[#f1f8ff]"
                      }} p-3 rounded-xl hover:bg-[#f1f8ff] ${
                        selectedOption.optionId ===
                          product.options[0].optionId &&
                        "border-[#1d97bd] bg-[#f1f8ff]"
                      }`}
                    >
                      <div className="grid grid-cols-12 gap-2 ">
                        <div className="col-span-1 flex items-center">
                          <div
                            className={`w-4 md:w-6 h-4 md:h-6 rounded-full border ${
                              selectedOption.optionId ===
                                product.options[0].optionId &&
                              "border-[#1d97bd]"
                            } flex items-center justify-center`}
                          >
                            <div
                              className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${
                                selectedOption.optionId ===
                                  product.options[0].optionId && "bg-[#1d97bd]"
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
                            className="pt-2"
                          />
                        </div>
                        <div className="col-span-5">
                          <span className=" block font-semibold text-md  leading-[1.2] mb-2">
                            {product.title}
                          </span>
                          <span className="text-xs md:text-[15px] block">
                            {product.subtitle}
                          </span>
                        </div>
                        <div className="col-span-3">
                          <div className="">
                            <div className="">
                              {product.options[0].oldPrice !==
                                product.options[0].price && (
                                <span className="bg-red-500 text-white px-2 text-xs md:text-sm rounded font-semibold">
                                  {(
                                    ((product.options[0].oldPrice -
                                      product.options[0].price) /
                                      product.options[0].oldPrice) *
                                    100
                                  ).toFixed()}
                                  % OFF
                                </span>
                              )}
                            </div>
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
            <div className="mt-5 ">
              <Button type="buy" onClick={handleBuyNow}>
                Continue to checkout
              </Button>
            </div>
            <div className="grid grid-cols-12 gap-2 mt-5">
              <div className="col-span-4 md:col-span-3 border-r pr-0 md:pr-5 text-center  text-sm">
                <Image
                  src={shippingIcon}
                  alt="Free shipping"
                  height={20}
                  className="mx-auto mb-2"
                />
                Free & Fast Shipping
              </div>
              <div className="col-span-4 md:col-span-3  border-r px-0 md:px-5 text-center text-sm">
                <Image
                  src={deliveryIcon}
                  alt="Free shipping"
                  height={20}
                  className="mx-auto mb-2"
                />
                2-6 Day US Delivery
              </div>
              <div className="col-span-4 md:col-span-3 px-0 md:px-5 text-center text-sm">
                <Image
                  src={moneyBackIcon}
                  alt="Free shipping"
                  height={20}
                  className="mx-auto mb-2"
                />
                60-Day Money-Back Guarantee
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 order-first md:order-none">
            <Slider {...settings}>
              <div className="relative rounded-lg">
                <Image
                  src={pr1}
                  className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                  // fill
                  height={600}
                  alt="Product"
                />
              </div>

              <div className="relative rounded-lg">
                <Image
                  src={pr6}
                  className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                  height={600}
                  alt="Product"
                />
              </div>
            </Slider>
            <div className="w-full text-center mt-0 md:mt-5">
              <span className="text-xs">SWIPE LEFT TO SEE MORE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1d97bd] text-white py-10 mt-10">
        <div className="container mx-auto">
          <h3 className="mx-auto text-center font-semibold text-3xl md:text-4xl max-w-[100%] md:max-w-[60%]">
            Here's How It Works
          </h3>
        </div>
      </div>{" "}
      <div className="flex items-center justify-center z-[-1] bg-blue-50">
        <div className="bg-[#1d97bd] w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
      </div>
      <div className="bg-[#ebfafe]">
        <div className="mt-0 md:my-10">
          <h3 className="text-4xl text-center max-w-[100%] md:max-w-[60%] mx-auto pt-10">
            {" "}
            Real, Verified Results:
          </h3>
          <h3 className="text-3xl md:text-4xl font-semibold text-center max-w-[100%] md:max-w-[60%] mx-auto">
            See Why Women All Over The World Calls
            <span className="text-pink-600">
              {" "}
              Cortiway Premium “Life Changing”
            </span>
          </h3>
          <h4 className="text-lg text-center max-w-[100%] md:max-w-[60%] mx-auto my-5 md:my-10">
            Note: All reviews below are from actual paying customers. They have
            been authenticated and verified
          </h4>
        </div>
        <ReviewsWithProduct />
        <div className="pb-10  px-5">
          <Button
            onClick={() => (window.location.href = "#product")}
            className="mx-auto mt-10"
            type="buy"
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="pt-[50px]">
            <div className="grid grid-cols-12 gap-4 border border-[#e03162] rounded-t-xl p-4 mt-10">
              <div className="col-span-12 md:col-span-6 p-0 md:p-10">
                <div className="">
                  <Image
                    src={pr2}
                    height={500}
                    alt="Holding"
                    className="mx-auto mb-5 rounded-xl"
                  />{" "}
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 p-0 md:p-10">
                <p className="text-xl font-semibold mb-10">
                  Cortiway Premium Blend is a clinically proven dietary
                  supplement rich in fulvic acid and antioxidants for enhanced
                  gut health, nutrient absorption and weight loss
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 flex">
                    <div className="relative min-w-[80px] h-[80px] rounded-full border mr-4">
                      <Image
                        src={bowlIcon}
                        alt="Bowl Movements"
                        className="object-cover rounded-full p-2"
                        fill
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        Supports Gut Health and Nutrient Absorption
                      </h3>
                      <p>
                        Unique blend of birch chaga and pine bark extracts is
                        rich in humic and fulvic acids, which significantly
                        improve nutrient bioavailability, ensuring your body
                        effectively absorbs essential vitamins and minerals for
                        optimal health.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 flex">
                    <div className="relative min-w-[80px] h-[80px] rounded-full border mr-4">
                      <Image
                        src={weightIcon}
                        alt="Weight Loss"
                        className="object-cover rounded-full p-2"
                        fill
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        Helps to Lose Weight
                      </h3>
                      <p>
                        By improving digestion and nutrient absorption, our
                        formula helps maintain steady energy levels and supports
                        healthy metabolism, making it easier to achieve and
                        sustain your weight loss goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 flex">
                    <div className="relative min-w-[80px] h-[80px] rounded-full border mr-4">
                      <Image
                        src={energyIcon}
                        alt="Energy"
                        className="object-cover rounded-full p-2"
                        fill
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        Reduces Inflammation for Digestive Comfort
                      </h3>
                      <p>
                        The anti-inflammatory properties of birch chaga and pine
                        bark extracts help soothe the digestive tract,
                        alleviating bloating and cramping while promoting a more
                        comfortable digestive experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            <div className="bg-pink-600 p-3 rounded-b text-white relative overflow-hidden z-[10]">
              <div className="flex items-center">
                <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white flex items-center justify-center">
                  <Image src={gift} alt="Gift" height={25} width={25} />
                </div>
                <span className="block ml-5 text-md md:text-lg">
                  <strong> Order Now</strong> and Get it Delivered for FREE,
                  With Our <strong>60-Day 100% Money-Back Guarantee!</strong>
                </span>
                <p className="text-2xl ml-5"></p>
              </div>
            </div>
            <div className="flex items-center justify-center z-[-1]">
              <div className="bg-pink-600 w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
            </div>
          </>
        </div>
        <div className="container mx-auto mt-10" id="product">
          <h2 className="text-4xl text-center pb-10 md-0 md:mb-10">
            Choose your bundle
          </h2>
          <div className="grid grid-cols-12 gap-4">
            {PRODUCTS.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
        </div>

        <div className="pb-10 mb-10">
          <div className="container mx-auto">
            <div classname="mb-10">
              <Image
                src={moneyBack}
                alt="Money Back"
                height={150}
                className="mx-auto"
              />
              <h3 className="text-2xl md:text-4xl text-center max-w-[100%] md:max-w-[60%] mx-auto pt-5 font-semibold">
                {" "}
                Your Purchase Is Protected By Our{" "}
                <span className="text-pink-600">
                  60-Day 100% Money Back Guarantee
                </span>
              </h3>
              <h5 className="text-lg md:text-xl text-center max-w-[100%] md:max-w-[60%] mx-auto mt-5">
                Here at Cortiway, we make sure our customers love their product
                or we will refund 100% of their investment. We're so confident
                you'll enjoy Cortiway Premium that we'll bear all the risk.
              </h5>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-10">
          <h3 className="text-4xl text-center max-w-[100%] md:max-w-[60%] mx-auto pt-10">
            {" "}
            Still Not Sure?
          </h3>
          <h3 className="text-4xl font-semibold text-center max-w-[100%] md:max-w-[60%] mx-auto px-5">
            Here Are The Top Questions We Get About
            <span className="text-pink-600"> Cortiway Premium</span>
          </h3>
          <div className="mt-10">
            <Faq />
          </div>
          <div className="pb-10 px-5 mt-10">
            <Button
              bg="#db2877"
              onClick={() => (window.location.href = "#product")}
              className="mx-auto mt-10"
            >
              Order Now!
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
