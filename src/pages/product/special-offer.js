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
import { PRODUCTS, WEIGHTLOSS } from "@/content/products";
import Product from "@/components/Product";
import Faq from "@/components/Faq";

import pr1 from "../../assets/products/colon/product-single2.png";
import pr2 from "../../assets/products/colon/product-new.jpg";
import pr3 from "../../assets/products/colon/product-progress.jpg";
import pr4 from "../../assets/products/colon/product-symptoms.jpg";
import pr5 from "../../assets/products/colon/product-ingredients.jpg";
import pr6 from "../../assets/products/colon/product-reviews.jpg";

import gift from "../../assets/icons/gift.png";
import bowlIcon from "../../../public/icons/healthy.png";
import weightIcon from "../../../public/icons/weight.png";
import energyIcon from "../../../public/icons/energetic.png";
import starYellow from "../../assets/icons/star-yellow.svg";
import moneyBack from "../../assets/icons/money.png";
import { useRouter } from "next/router";
import shippingIcon from "../../assets/icons/shipping3.svg";
import deliveryIcon from "../../assets/icons/delivery.svg";
import moneyBackIcon from "../../assets/icons/money-back.svg";
import ReviewsWithProduct from "@/components/ReviewsWithProduct";
import exred from "../../assets/icons/letter-x.png";
import clinicallyImg from "../../assets/products/colon/clinically.jpg";

export default function SpecialOffer() {
  const [selectedOption, setSelectedOption] = useState(PRODUCTS[0].options[0]);
  const router = useRouter();
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  const handleBuyNow = () => {
    // router.push(selectedOption.orderUrl);
    router.push("/product/oto");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <title>Cortiway.com - Special Offer</title>
        <meta name="description" content="Cortiway Premium Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-black text-white text-center p-2 flex items-center justify-center">
        {/* <div>
          <Image src={pumpkin} alt="Pumpkin" height={25} className="mr-4" />
        </div> */}
        Get Your First Bottle FREE – Pay Only If It Works!
      </div>
      <TopNavigation />
      <div className="container mx-auto mt-0 md:mt-10">
        <div className="grid grid-cols-12 gap-4 pb-5">
          <div className="col-span-12 md:col-span-6 pr-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl mb-3 font-semibold">
              New & <span className="text-pink-600">ULTRA potent</span> Cortiway
              Premium
            </h1>
            <div className="flex items-center">
              <div className="flex mr-2">
                <Image src={starYellow} alt="Star" height={20} />
                <Image src={starYellow} alt="Star" height={20} />
                <Image src={starYellow} alt="Star" height={20} />
                <Image src={starYellow} alt="Star" height={20} />
                <Image src={starYellow} alt="Star" height={20} />
              </div>
              <span>4,715 Reviews</span>
            </div>
            <h2 className="text-2xl mt-5 mb-5">
              {/* <strong>Try Cortiway Premium:</strong> Lose Excess Weight, Boost
              Energy And Wave Goodbye To Bloat In 2025 */}
              Experience Cortiway Risk-Free! 1,000 Free Bottles – Pay Only If It
              Works!
            </h2>
            <div className="">
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
            </div>
            <div className="mt-5">Buying Options:</div>
            <div className="grid grid-cols-12 gap-2 mt-5">
              <div className="col-span-12">
                <div className="border-2 border-black p-5 rounded-xl bg-white grid grid-cols-12 gap-2 mb-5">
                  <div className="col-span-1">
                    <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    </div>
                  </div>
                  <div className="col-span-4 text-center ">
                    <span className="font-semibold">
                      {PRODUCTS[2].subtitle}
                    </span>
                    <Image
                      src={PRODUCTS[2].options[0].image}
                      alt="Product"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="col-span-7">
                    <h3 className="font-semibold text-xl mb-2">
                      Buy Now,{" "}
                      <span className="text-pink-600">Pay After Results</span>
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
                      <span className="bg-orange-100 border border-orange-300 text-orange-500 px-2 text-sm">
                        Almost sold out
                      </span>
                    </div>
                    <div className="bg-gray-100 h-2 w-full rounded-xl flex justify-end mt-2">
                      <div className="h-2 w-10 bg-red-600 rounded-r-xl"></div>
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-gray-500">
                      7 items left!
                    </div>
                  </div>
                </div>
              </div>
              {/* {PRODUCTS.map((product, index) => {
                return (
                  <div
                    className="col-span-12 md:col-span-4 relative cursor-pointer "
                    key={index}
                    onClick={() => handleSelectOption(product.options[0])}
                  >
                    <div
                      className={`absolute text-xs font-semibold min-w-[90px] text-center ${
                        product.id === 2 && "bg-green-400"
                      } ${
                        product.id === 1 && "bg-yellow-400"
                      } top-[-5px] rounded px-1 left-[50%] transform -translate-x-[50%] `}
                    >
                      {product.badge}
                    </div>
                    <div
                      className={`bg-white  border-2 ${
                        product.popular ? " bg-[#fffae8]" : "bg-gray-50"
                      }} p-3 text-center rounded-xl hover:bg-gray-50 ${
                        selectedOption.optionId ===
                          product.options[0].optionId && "border-black"
                      }`}
                    >
                      <span className="text-xs md:text-[15px]">
                        {product.subtitle}
                      </span>
                      <Image
                        src={product.options[0].image}
                        alt="Cortiway Premium"
                        width={50}
                        height={50}
                        className="mx-auto"
                      />
                      <div className="">
                        <div className="flex items-center justify-center">
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
                          {product.options[0].price && (
                            <>
                              <h3
                                className={`text-xl font-semibold ${
                                  product.options[0].oldPrice !==
                                  product.options[0].price
                                    ? "text-red-600"
                                    : ""
                                }`}
                              >
                                {product.options[0].price}
                              </h3>
                              {product.options[0].oldPrice !==
                                product.options[0].price && (
                                <span className="text-gray-500 ml-1 line-through text-xs">
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
                );
              })} */}
            </div>
            <div className="mt-0 ">
              <Button bg="#db2877" type="buy" onClick={handleBuyNow}>
                Continue to checkout
              </Button>
            </div>
            <div className="grid grid-cols-12 gap-2 mt-5">
              <div className="col-span-4 md:col-span-3 border-r pr-5 text-center text-sm">
                <Image
                  src={shippingIcon}
                  alt="Free shipping"
                  height={20}
                  className="mx-auto mb-2"
                />
                Free & Fast Shipping
              </div>
              <div className="col-span-4 md:col-span-3  border-r px-5 text-center text-sm">
                <Image
                  src={deliveryIcon}
                  alt="Free shipping"
                  height={20}
                  className="mx-auto mb-2"
                />
                2-6 Day US Delivery
              </div>
              <div className="col-span-4 md:col-span-3  px-5 text-center text-sm">
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
                  src={pr2}
                  className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                  height={600}
                  alt="Product"
                />
              </div>
              <div className="relative rounded-lg">
                <Image
                  src={pr3}
                  className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                  height={600}
                  alt="Product"
                />
              </div>
              <div className="relative rounded-lg">
                <Image
                  src={pr4}
                  className="mx-auto px-0 md:px-10  object-cover rounded-lg"
                  height={600}
                  alt="Product"
                />
              </div>

              <div className="relative rounded-lg">
                <Image
                  src={pr5}
                  className="mx-auto px-0 md:px-10 object-cover rounded-lg"
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
            <div className="w-full text-center mt-7">
              <span className="text-xs">SWIPE LEFT TO SEE MORE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
      {/* <h2 className="text-2xl text-center p-5 px-10 mt-5">
        Researched Backed Ingredients As Seen In…
      </h2>
      <Covered /> */}
      <div className=" bg-white py-10 md:py-[100px]">
        <div className="container mx-auto">
          <h3 className="text-center  mt-5 md:mt-0 text-4xl font-semibold mb-10">
            How <span className="text-pink-600">It Works?</span>
          </h3>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 mb-5">
              <h3 className="font-semibold mb-3 text-xl">
                1. Try Cortiway Premium Free for 30 Days
              </h3>
              <p>
                Sign up and receive a free bottle of Cortiway Premium, no
                upfront cost. Simply commit to taking it daily and see how it
                works for you.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 mb-5">
              <h3 className="font-semibold mb-3 text-xl">
                2. Track Your Results
              </h3>
              <p>
                Over the 30 days, keep an eye on changes like reduced bloating,
                increased energy, and weight loss. We’ll provide an easy way to
                track your progress.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 mb-5">
              <h3 className="font-semibold mb-3 text-xl">
                3. Pay Only If You See Results
              </h3>
              <p>
                At the end of 30 days, if you’re satisfied with your results,
                you complete the payment. If you don’t see any improvements,
                there’s no charge. Period.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" bg-white py-10 md:py-[100px]">
        <div className="container mx-auto">
          <div className="">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7">
                <h3 className="text-center md:text-left mt-5 md:mt-0 text-4xl font-semibold">
                  It's <span className="text-pink-600">Clinically Proven</span>
                </h3>
                <p className="mt-10 text-lg md:text-xl">
                  Cortiway Premium is one of the few weight loss supplements on
                  the market that is clinically tested and proven to help with{" "}
                  <strong>
                    gut health, appetite control, metabolism, and weight loss…
                  </strong>
                </p>
                <p className="text-lg md:text-xl my-5">...without:</p>
                <ul className="text-lg md:text-xl">
                  <li className="flex items-center">
                    <div>
                      <Image src={exred} alt="X" height={30} className="mr-2" />
                    </div>
                    Depriving diets
                  </li>
                  <li className="flex items-center my-2">
                    <div>
                      <Image src={exred} alt="X" height={30} className="mr-2" />
                    </div>
                    Intensive workouts
                  </li>
                  <li className="flex items-center">
                    <div>
                      <Image src={exred} alt="X" height={30} className="mr-2" />
                    </div>
                    Radical lifestyle changes
                  </li>
                </ul>
                <p className="text-lg md:text-xl mt-5">
                  With a <strong>customer satisfaction rate of over 78%</strong>
                  , the clinical trials have proven it to be a safe and
                  effective choice already favored by thousands of users
                  worldwide.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 order-first md:order-none">
                <Image
                  src={clinicallyImg}
                  alt="Clinically proved"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div>
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
      </div>
      <ReviewsWithProduct />
      {/* <div className="pb-10  px-5">
        <Button
          bg="#db2877"
          onClick={() => (window.location.href = "#product")}
          className="mx-auto mt-10"
          type="buy"
        >
          Buy Now
        </Button>
      </div> */}

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
                <p className="text-2xl font-semibold mb-10">
                  Rich in fulvic acids and polyphenols, which are proven to help
                  with gut health, weight loss and energy.
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 flex">
                    <div className="relative min-w-[60px] md:min-w-[100px]  h-[60px] md:h-[100px] rounded-full border mr-4">
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
                        Contains scientifically backed ingredients that support
                        the GI tract and promote regular bowel movements—without
                        straining, excessive wiping, or wasted time on the
                        toilet.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 flex">
                    <div className="relative min-w-[60px] md:min-w-[100px]  h-[60px] md:h-[100px] rounded-full border mr-4">
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
                        Formulated with highest quality ingredients that aid in
                        weight loss by boosting metabolism and supporting fat
                        oxidation to help you reach your goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 flex">
                    <div className="relative min-w-[60px] md:min-w-[100px]  h-[60px] md:h-[100px] rounded-full border mr-4">
                      <Image
                        src={energyIcon}
                        alt="Energy"
                        className="object-cover rounded-full p-2"
                        fill
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        Promotes Steady Energy Levels Throughout the Day
                      </h3>
                      <p>
                        Enhances nutrient delivery at the cellular level,
                        boosting energy levels and reducing sugar cravings, as
                        well as the likelihood of overeating due to energy dips.
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
                  With Our <strong>60 Days Money Back Guarantee!</strong>
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
            <div className="mb-10">
              <Image
                src={moneyBack}
                alt="Money Back"
                height={150}
                className="mx-auto"
              />
              <h3 className="text-4xl text-center max-w-[100%] md:max-w-[60%] mx-auto pt-5">
                {" "}
                Your Purchase Is Protected By Our
              </h3>
              <h3 className="text-4xl font-semibold text-center max-w-[100%] md:max-w-[60%] mx-auto text-pink-600">
                60-Day 100% Money Back Guarantee
              </h3>
              <h5 className="text-xl text-center max-w-[100%] md:max-w-[60%] mx-auto mt-5">
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
          {/* <div className="pb-10 px-5 mt-10">
            <Button
              bg="#db2877"
              onClick={() => (window.location.href = "#product")}
              className="mx-auto mt-10"
            >
              Order Now!
            </Button>
          </div> */}
        </div>
      </div>
      <div className="w-full bg-white fixed bottom-0 p-3 md:hidden">
        <Button
          bg="#db2877"
          type="buy"
          onClick={handleBuyNow}
          className="mx-auto"
        >
          Continue to checkout $0.00
        </Button>
      </div>
      <Footer />
    </>
  );
}
