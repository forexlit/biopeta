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

import clean from "../../assets/images/12.jpg";
import cream from "../../assets/images/11.jpg";
import maintain from "../../assets/images/maintain.jpg";
import creamIngredients from "../../assets/images/ing.png";
import giftImg from "../../../public/product/biopeta/gift.jpg";
import ing1 from "../../assets/images/ingredients/1.jpg";
import ing2 from "../../assets/images/ingredients/2.jpg";
import ing3 from "../../assets/images/ingredients/3.jpg";
import { Timer } from "@/components/Timer";

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

  const handleRatingsClick = () => {
    window.location.href = "#reviews";
  };
  const handleIngredients = () => {
    window.location.href = "#ingredients";
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
            <Ratings onClick={handleRatingsClick} />
            <h2 className="text-lg md:text-xl md:text-xl mt-5 mb-5">
              <strong>Try BioPeta Anti-Shedding Solution:</strong> Keep Your
              Home Fur-Free, Promote a Healthy, Shiny Coat, and Make Shedding a
              Thing of the Past!
            </h2>
            <div className="flex items-center mt-5 mb-2">
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
            <span
              className="text-sm underline text-gray-500 cursor-pointer"
              onClick={handleIngredients}
            >
              See all ingredients
            </span>
            <div className="relative">
              {/* Timer component with higher z-index */}
              <div className="z-10 relative">
                <Timer img={giftImg} />
              </div>
              {/* Blue rectangle positioned under Timer */}
              <div className="flex items-center justify-center">
                <div className="absolute z-0 bg-red-600 w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
              </div>
            </div>
            <div className="mt-5 font-semibold">Buying Options:</div>
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
                        <div className="col-span-2 flex items-center">
                          <Image
                            src={product.options[0].image}
                            alt="Biopeta Anti-Shedding Cream"
                            height={80}
                            className="pt-2"
                            width={80}
                          />
                        </div>
                        <div className="col-span-6">
                          <span className=" block font-semibold text-sm md:text-[15px]  leading-[1.2] mb-1">
                            {product.title}
                          </span>
                          <span className="text-xs md:text-[14px] block">
                            {product.subtitle}
                          </span>
                          {product.gift && (
                            <div className="flex items-center mt-0 md:mt-2 flex-col md:flex-row">
                              <div className="text-xl mr-2">+</div>
                              <div className="border border-red-400 bg-red-50 text-xs p-1 font-semibold flex items-cetner">
                                <div className="mr-2">
                                  <Image src={gift} alt="gift" height={15} />{" "}
                                </div>
                                FREE Gift Applied
                              </div>
                            </div>
                          )}
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
      <div className="bg-[#1d97bd] text-white py-10 mt-10 ">
        <div className="container mx-auto">
          <h3 className="mx-auto text-center font-semibold text-3xl md:text-4xl max-w-[100%] md:max-w-[60%]">
            Here's How It Works
          </h3>
        </div>
      </div>{" "}
      <div className="flex items-center justify-center z-[-1] bg-blue-50">
        <div className="bg-[#1d97bd] w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
      </div>
      <div className="bg-blue-50 pt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7 bg-white p-5 md:p-10 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-semibold pb-5">
                Step 1: Clean Your Dog's Fur
              </h3>
              <div className="content text-sm md:text-md">
                <p>
                  Start by cleaning your dog with our{" "}
                  <strong>Waterless Shampoo</strong>. If you choose to use a
                  regular shampoo, make sure your dog's fur is completely dry
                  before proceeding.
                </p>
                <p className="font-semibold text-lg">
                  Why use our waterless shampoo?
                </p>
                <ul>
                  <li className="mb-2">
                    <strong>Quick & Easy:</strong> Clean your pup's coat without
                    the hassle of a full bath.
                  </li>
                  <li className="mb-2">
                    <strong>Odor Control:</strong> Neutralizes odors with
                    natural deodorizing agents for a fresh coat.
                  </li>
                  <li className="mb-2">
                    <strong>Bug Defense:</strong> Lavender and Lemon oils repel
                    bugs while adding a pleasant scent.
                  </li>
                  <li className="mb-2">
                    <strong>Gentle Nourishment:</strong> Calendula Extract, Milk
                    Lipids, and Sea Buckthorn Oil soothe skin, reduce shedding,
                    and support healthy fur.
                  </li>
                  <li className="mb-2">
                    <strong>Safe & Non-Irritating:</strong> A gentle formula
                    ensures stress-free grooming.
                  </li>
                </ul>
                <strong className="text-md md:text-lg mb-1 mt-5 block text-gray-500">
                  How to use it?
                </strong>
                <ul className="text-xs md:text-sm text-gray-500">
                  <li>
                    1. Pump the foam onto your hands or directly onto your dog's
                    fur.
                  </li>
                  <li>2. Massage it thoroughly into the coat.</li>
                  <li>
                    3. Brush thoroughly to ensure all residue is removed and the
                    coat is smooth.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 order-first md:order-none">
              <Image src={clean} alt="Cleaning" className="rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="col-span-12 md:col-span-5">
              <Image src={cream} alt="Cream" className="rounded-lg" />
            </div>
            <div className="col-span-12 md:col-span-7 bg-white p-5 md:p-10 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-semibold pb-5">
                Step 2: Apply the Anti-Shedding Cream
              </h3>
              <div className="content text-sm md:text-md">
                <p>
                  After brushing, apply our Anti-Shedding Cream. This step
                  provides deep nourishment and strengthens the fur, tackling
                  the root causes of excessive shedding.
                </p>
                <p className="font-semibold text-lg">How it's different?</p>
                <ul>
                  <li className="mb-3">
                    <strong className="block">✅ Advanced Absorption</strong>{" "}
                    Unlike sprays that may irritate or be unpleasant for some
                    dogs, our fast-absorbing cream is easy to apply and doesn't
                    leave a sticky residue.
                  </li>
                  <li className="mb-3">
                    <strong className="block">
                      ✅ Moisture and Protection
                    </strong>{" "}
                    Formulated with Ceramides in Liposomal format, the cream
                    helps restore the natural protective barrier of your dog's
                    skin, keeping it hydrated and healthy.
                  </li>
                  <li className="mb-3">
                    <strong className="block">
                      ✅ Antioxidant-Rich Formula
                    </strong>{" "}
                    Key ingredients like Sea Buckthorn Oil and Calendula Extract
                    soothe and repair the skin, promoting a healthier coat over
                    time.
                  </li>
                  <li className="mb-3">
                    <strong className="block">✅ Gentle on Skin</strong> Ideal
                    for dogs with occasional skin discomfort, offering relief
                    without harsh chemicals.
                  </li>
                  <li className="mb-3">
                    <strong className="block"> ✅ No Immediate Licking</strong>{" "}
                    The quick absorption minimizes the chance of your dog
                    licking it off right after application.
                  </li>
                </ul>
                <strong className="text-md md:text-lg mb-1 mt-5 block text-gray-500">
                  How to use it?
                </strong>
                <ul className="text-xs md:text-sm text-gray-500">
                  <li>1. Take a small amount of the cream.</li>
                  <li>
                    2. Massage it into your dog's entire coat and skin, applying
                    extra to specific areas if needed.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-10 pb-10">
            <div className="col-span-12 md:col-span-7 bg-white p-5 md:p-10 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-semibold pb-5">
                Step 3: Maintain the Routine
              </h3>
              <div className="content text-sm md:text-md">
                <p>
                  After brushing, apply our Anti-Shedding Cream. This step
                  provides deep nourishment and strengthens the fur, tackling
                  the root causes of excessive shedding.
                </p>
                <p className="font-semibold text-lg">For best results:</p>
                <ul>
                  <li className="mb-3">
                    1. Apply the cream 2 or 3 times a week initially.
                  </li>
                  <li className="mb-3">
                    2. Once shedding is reduced, switch to applying the cream
                    once a week to maintain the results.
                  </li>
                </ul>

                <ul className="text-xs md:text-sm text-gray-500">
                  <li>
                    Note: It's not necessary to wash your dog every time you
                    apply the cream. The initial cleaning step is essential, but
                    ongoing use of the cream does not require frequent baths.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 order-first md:order-none">
              <Image src={maintain} alt="Maintain" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white" id="ingredients">
        <div className="container mx-auto">
          <h3 className="font-semibold text-4xl pt-10 text-center">
            What's inside?
          </h3>
          <div className="flex items-center justify-center mt-5">
            <div className="bg-[#1d97bd] text-white font-semibold p-2 px-5 rounded-full mr-5">
              Anti-shedding cream
            </div>
            {/* <div>Waterless Shampoo</div> */}
          </div>
          <div className="">
            <div className="grid grid-cols-12 gap-4 border border-[#1d97bd] rounded-t-xl p-4 mt-10">
              <div className="col-span-12 md:col-span-6 p-0 md:p-10">
                <div className="border-2 border-black rounded-lg">
                  <Image
                    src={creamIngredients}
                    height={500}
                    alt="Anti-shedding cream"
                    className="mx-auto mb-5 rounded-xl"
                  />{" "}
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 p-0 md:p-10">
                <p className="text-[15px] md:text-lg font-semibold mb-10 text-center md:text-left">
                  BioPeta Anti-Shedding Cream is a scientifically crafted
                  solution enriched with natural oils and antioxidants,
                  formulated to reduce shedding, nourish the skin, and promote a
                  healthier, shinier coat for your pet.
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 flex">
                    <div className="relative min-w-[80px] h-[80px] rounded-full border mr-4">
                      <Image
                        src={ing1}
                        alt="Calendula Extract"
                        className="object-cover rounded-full p-2"
                        fill
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Calendula Extract
                      </h3>
                      <p className="text-sm md:text-[15px]">
                        Known for its soothing and anti-inflammatory properties,
                        Calendula helps calm irritated skin, promoting a
                        healthier environment for hair follicles and reducing
                        excessive shedding caused by skin discomfort.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 flex">
                    <div className="relative min-w-[80px] h-[80px] rounded-full border mr-4">
                      <Image
                        src={ing2}
                        alt="Ceramide NP"
                        className="object-cover rounded-full p-2"
                        fill
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Ceramide NP
                      </h3>
                      <p className="text-sm md:text-[15px]">
                        A vital component for maintaining a strong skin barrier,
                        Ceramides lock in moisture and prevent dryness. Healthy,
                        hydrated skin supports stronger, less brittle fur,
                        reducing shedding at its root.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 flex">
                    <div className="relative min-w-[80px] h-[80px] rounded-full border mr-4">
                      <Image
                        src={ing3}
                        alt="Sea Buckthorn Oil"
                        className="object-cover rounded-full p-2"
                        fill
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Sea Buckthorn Oil
                      </h3>
                      <p className="text-sm md:text-[15px]">
                        Packed with essential fatty acids and antioxidants, Sea
                        Buckthorn nourishes the skin and fur, repairing damage
                        and enhancing coat strength, which directly reduces hair
                        loss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            <div className="bg-[#1d97bd] p-3 rounded-b text-white relative overflow-hidden z-[10]">
              <div className="flex items-center">
                <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white flex items-center justify-center">
                  <Image src={gift} alt="Gift" height={25} width={25} />
                </div>
                <span className="block ml-5 text-md md:text-lg font-semibold">
                  Get Your Free Waterless Shampoo – For a Limited Time Only! ✨
                </span>
                <p className="text-2xl ml-5"></p>
              </div>
            </div>
            <div className="flex items-center justify-center z-[-1]">
              <div className="bg-[#1d97bd] w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
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
              <h3 className="text-2xl md:text-4xl text-center max-w-[100%] md:max-w-[60%] mx-auto  font-semibold">
                {" "}
                Your Purchase Is Protected By Our{" "}
                <span className="text-[#1d97bd]">
                  60-Day 100% Money Back Guarantee
                </span>
              </h3>
              <h5 className="text-md md:text-xl text-center max-w-[100%] md:max-w-[60%] mx-auto mt-5">
                Here at BioPeta, we make sure our customers love their product
                or we will refund 100% of their investment. We're so confident
                you'll enjoy BioPeta that we'll bear all the risk.
              </h5>
            </div>
          </div>
        </div>
        <div className="bg-[#ebfafe]" id="reviews">
          <div className="mt-0 md:my-10 py-10">
            <div className="px-5 ">
              {" "}
              <h3 className="text-2xl md:text-4xl font-semibold text-center max-w-[100%] md:max-w-[60%] mx-auto">
                Real, Verified Results: See Why Dog Oners All Over The World
                Calls
                <span className="text-[#1d97bd]"> BioPeta “Life Changing”</span>
              </h3>
            </div>
            {/* 
            <h4 className="text-[15px] md:text-lg text-center max-w-[100%] md:max-w-[60%] mx-auto my-5 md:my-10">
              Note: All reviews below are from actual paying customers. They
              have been authenticated and verified
            </h4> */}
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
        <div className="bg-gray-100 py-10">
          <h3 className="text-xl md:text-4xl text-center max-w-[100%] md:max-w-[60%] mx-auto pt-0 md:pt-10">
            {" "}
            Still Not Sure?
          </h3>
          <h3 className="text-xl md:text-4xl font-semibold text-center max-w-[100%] md:max-w-[60%] mx-auto px-5">
            Here Are The Top Questions We Get About
            <span className="text-[#1d97bd]"> BioPeta</span>
          </h3>
          <div className="mt-10">
            <Faq />
          </div>
          <div className="pb-10 px-5 mt-10">
            <Button
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
