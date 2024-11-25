/* eslint-disable @next/next/next-script-for-ga */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TopNavigation } from "@/components/TopNavigation";
import { SmallContainer } from "@/components/SmallContainer";
import { FONTS } from "@/styles/fonts";
import { COLORS } from "@/styles/colors";

import { sizes } from "@/styles/breakpoints";
// import { Reviews } from "@/views/home/Reviews";
import { Footer } from "@/views/Footer";
import Head from "next/head";
import { Button } from "@/components/Button";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sleepIcon from "../../../public/icons/sleeping.png";
import weight from "../../../public/icons/gain-weight.png";
import weightGain from "../../../public/icons/weightgain.svg";
import ListItem from "@/components/ListItem";
import { Timer } from "@/components/Timer";
import security from "../../../src/assets/icons/security.png";
import Covered from "@/components/Covered";
import PromoDelivery from "@/components/PromoDelivery";
import pumpkin from "../../assets/icons/pumpkin.svg";
import { ReviewsWithImage } from "@/views/home/ReviesWithImage";
import { PRODUCTS, WEIGHTLOSS } from "@/content/products";
import Product from "@/components/Product";
import Faq from "@/components/Faq";
import productWithBurner from "../../../public/product-with-fatburner.png";
import pr1 from "../../../public/pr1.png";
import pr2 from "../../../public/pr2.png";
import ba1 from "../../../public/ba/1.jpg";
import ba2 from "../../../public/ba/2.jpg";
import ba3 from "../../../public/ba/3.jpg";
import ba4 from "../../../public/ba/4.jpg";
import ba5 from "../../../public/ba/5.jpg";
import ba6 from "../../../public/ba/6.jpg";
import ba7 from "../../../public/ba/7.jpg";
import ba8 from "../../../public/ba/8.jpg";
import starWhite from "../../assets/icons/star-white.png";
import fatBurner from "../../../public/product/fat-free2.png";
import gift from "../../assets/icons/gift.png";
import verif from "../../assets/images/verif.png";
import f1 from "../../assets/icons/fat/1.webp";
import f2 from "../../assets/icons/fat/2.webp";
import f3 from "../../assets/icons/fat/3.webp";
import f4 from "../../assets/icons/fat/4.webp";
import exGreen from "../../assets/icons/ex-green.svg";
import threeBottles from "../../../public/product/3bottles-pink.png";
import sixBottles from "../../../public/product/6bottles-pink.png";
import { getFormattedDate } from "@/utils/formatedDate";
import stressed from "../../../public/icons/concentration.png";
import stomach from "../../../public/icons/stomach.png";

export default function ProductId() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 15,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let updatedSeconds = prevTime.seconds - 1;
        let updatedMinutes = prevTime.minutes;
        let updatedHours = prevTime.hours;

        if (updatedSeconds < 0) {
          updatedSeconds = 59;
          updatedMinutes -= 1;
        }

        if (updatedMinutes < 0) {
          updatedMinutes = 59;
          updatedHours -= 1;
        }

        if (updatedHours < 0) {
          clearInterval(timer); // Stop the timer when time runs out
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const today = new Date();
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
        <title>Biopeta.com - Feel Yourself Again</title>
        <meta name="description" content="Autism Outreach Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-black text-white text-center p-2 flex items-center justify-center">
        <div>
          <Image src={pumpkin} alt="Pumpkin" height={25} className="mr-4" />
        </div>
        HALLOWEEN SALE UP TO <strong>-51% OFF!</strong>
      </div>
      <TopNavigation />
      <div className="container mx-auto mt-0 md:mt-10">
        <div className="grid grid-cols-12 gap-4 pb-5">
          <div className="col-span-12 md:col-span-6 pr-0 md:pr-10">
            <h1 className="text-3xl md:text-4xl mb-3 font-semibold">
              Stop Cortisol-Driven Weight Gain with Ashwagandha and{" "}
              <strong>Supercharge</strong> Your Fat Loss with Our Fat Burner!
              {/* The Winning Combo of Cortiway + Fat Burner: Burn Fat Faster! 🤩 */}
            </h1>
            {/* <h2 className="font-semibold mb-5">
              Cortiway + Fat Burner reduces high cortisol levels and accelerates
              fat loss, which helps:
            </h2> */}

            <h2 className="font-semibold mb-5">
              Ashwagandha with black pepper:
            </h2>
            {/* <p>
              Once your body is balanced, our fat burner enhances the process by
              increasing your metabolism, helping you burn fat faster and more
              efficiently.{" "}
            </p>
            <p>
              Together, they offer a powerful solution to lose weight and keep
              it off for good!
            </p> */}

            <ul className="">
              <ListItem
                icon={weightGain}
                title="Prevents New Fat Storage"
                description="Lowers cortisol, stops stress-related fat gain."
              />
              <ListItem
                icon={stressed}
                title="Reduces Stress and Anxiety"
                description="Calms the mind, lowers cortisol levels."
              />
              <ListItem
                icon={stomach}
                title="Regulates metabolism"
                description="Balances hormones, boosts metabolic function."
              />

              <ListItem
                icon={sleepIcon}
                title="Improves Sleep & Recovery"
                description="Enhances sleep quality and physical recovery."
              />

              <li></li>
            </ul>
            <div className="my-10">
              <Button onClick={() => (window.location.href = "#product")}>
                Buy now
              </Button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Slider {...settings}>
              <div className="relative h-[320px] md:h-[320px] lg:h-[550px] rounded-lg">
                <Image
                  src={productWithBurner}
                  className="mx-auto px-0 md:px-10  object-cover rounded-lg"
                  fill
                  alt="Product"
                />
              </div>
              <div className="relative h-[320px] md:h-[320px] lg:h-[550px] rounded-lg">
                <Image
                  src={pr1}
                  className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                  fill
                  alt="Product"
                />
              </div>
              <div className="relative h-[320px] md:h-[320px] lg:h-[550px] rounded-lg">
                <Image
                  src={pr2}
                  className="mx-auto px-0 md:px-10  object-cover rounded-lg"
                  fill
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
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="pt-[50px]">
            <div className="bg-[#e03162] text-white p-5 rounded-t-lg">
              Get a <strong>FREE fat burner!</strong> Only available from
              October 11th to {getFormattedDate()}, or while stocks last! Offer
              ends in:{" "}
              <strong>
                {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
              </strong>
            </div>
            <div className="grid grid-cols-12 gap-4 border border-[#e03162] p-4 ">
              <div className="col-span-12 md:col-span-4">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <h3 className="font-semibold text-2xl mb-5 text-center">
                      Fat Burner
                    </h3>
                    <Image
                      src={fatBurner}
                      alt="Fat burner"
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="mb-3  text-lg">
                  Fat Burner with MCT is designed to boost weight loss
                </div>

                <div className="flex">
                  <div className="pr-3">
                    <Image
                      src={f1}
                      alt="Weigth control"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="pr-3">
                    <Image
                      src={f2}
                      alt="Weigth control"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="pr-3">
                    <Image
                      src={f3}
                      alt="Weigth control"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div>
                    <Image
                      src={f4}
                      alt="Weigth control"
                      height={50}
                      width={50}
                    />
                  </div>
                </div>

                <div className="mt-10 mb-2 text-orange-600">
                  Only 17 / 1000 left in stock!
                </div>
                <div className="h-2 bg-gray-100 mb-5">
                  <div className="w-3 bg-red-400 h-2"></div>
                </div>
              </div>
            </div>
          </div>
          <>
            <div className="bg-[#e03162] p-3 rounded-b text-white relative overflow-hidden z-[10]">
              <div className="flex items-center">
                <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white flex items-center justify-center">
                  <Image src={gift} alt="Gift" height={25} width={25} />
                </div>
                <span className="block ml-5 text-md md:text-lg">
                  <strong> Order now</strong> and get it delivered for free!{" "}
                </span>
                <p className="text-2xl ml-5"></p>
              </div>
            </div>
            <div className="flex items-center justify-center z-[-1]">
              <div className="bg-[#e03162] w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
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
          <div>
            <div className="text-center text-xl mb-2 font-semibold mt-5">
              Our customers say:
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-[#00b779] p-1 mr-1">
                <Image src={starWhite} width={30} height={30} alt="star" />
              </div>
              <div className="bg-[#00b779] p-1 mr-1">
                <Image src={starWhite} width={30} height={30} alt="star" />
              </div>
              <div className="bg-[#00b779] p-1 mr-1">
                <Image src={starWhite} width={30} height={30} alt="star" />
              </div>
              <div className="bg-[#00b779] p-1 mr-1">
                <Image src={starWhite} width={30} height={30} alt="star" />
              </div>
              <div className="bg-[#00b779] p-1 mr-3">
                <Image src={starWhite} width={30} height={30} alt="star" />
              </div>
              <div className="text-xl">4.93/5</div>
            </div>
            <div className="text-center mt-2">Based on 120,000+ reviews</div>
          </div>

          <div>
            <h2 className="text-4xl text-center py-10 mb-10 md:max-w-[50%] mx-auto mt-10">
              These Are Your Success Stories: Incredible Results with Cortiway
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <Image src={ba1} alt="before-after" className="mx-auto" />
                <div className="bg-gradient-to-t from-black to-transparent w-full bottom-0 absolute text-white text-center p-5 md:p-2">
                  "I can't recommend it enough to anyone looking for a fast and
                  effective weight loss solution, I feel AMAZING!!"
                </div>
              </div>
              <div className="flex mt-2">
                <div>
                  <Image
                    src={threeBottles}
                    width={60}
                    className="mr-3"
                    alt="product"
                  />
                </div>
                <div>
                  <span className="flex text-green-600 ">
                    <Image
                      src={exGreen}
                      alt=""
                      width={18}
                      height={18}
                      className="mr-1"
                    />
                    Verified purchase
                  </span>
                  <span className="text-lg block">
                    <strong>Emma</strong>, McAllen, Texas
                  </span>
                  <span className="block text-gray-400">
                    Purchased 3 bottles of Cortiway
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <Image src={ba2} alt="before-after" className="mx-auto" />
                <div className="bg-gradient-to-t from-black to-transparent  w-full bottom-0 absolute text-white text-center p-5 md:p-2">
                  "I'm thrilled!! 47 pounds weight loss! I feel like a new
                  person..."
                </div>
              </div>
              <div className="flex mt-2">
                <div>
                  <Image
                    src={sixBottles}
                    width={60}
                    className="mr-3"
                    alt="product"
                  />
                </div>
                <div>
                  <span className="flex text-green-600 ">
                    <Image
                      src={exGreen}
                      alt=""
                      width={18}
                      height={18}
                      className="mr-1"
                    />
                    Verified purchase
                  </span>
                  <span className="text-lg block">
                    <strong>Olivia</strong>, Memphis, Tennessee
                  </span>
                  <span className="block text-gray-400">
                    Purchased 6 bottles of Cortiway
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <Image src={ba3} alt="before-after" className="mx-auto" />
                <div className="bg-gradient-to-t from-black to-transparent  w-full bottom-0 absolute text-white text-center p-5 md:p-2">
                  "I'm finally enjoying life again and STILL able to eat all my
                  favorite foods"
                </div>
              </div>
              <div className="flex mt-2">
                <div>
                  <Image
                    src={sixBottles}
                    width={60}
                    className="mr-3"
                    alt="product"
                  />
                </div>
                <div>
                  <span className="flex text-green-600 ">
                    <Image
                      src={exGreen}
                      alt=""
                      width={18}
                      height={18}
                      className="mr-1"
                    />
                    Verified purchase
                  </span>
                  <span className="text-lg block">
                    <strong>Sophia</strong>, Baton Rouge
                  </span>
                  <span className="block text-gray-400">
                    Purchased 6 bottles of Cortiway
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <Image src={ba4} alt="before-after" className="mx-auto" />
                <div className="bg-gradient-to-t from-black to-transparent  w-full bottom-0 absolute text-white text-center p-5 md:p-2">
                  "More energy, better sleep, and a newfound confidence—I never
                  want to go back!"
                </div>
              </div>
              <div className="flex mt-2">
                <div>
                  <Image
                    src={sixBottles}
                    width={60}
                    className="mr-3"
                    alt="product"
                  />
                </div>
                <div>
                  <span className="flex text-green-600 ">
                    <Image
                      src={exGreen}
                      alt=""
                      width={18}
                      height={18}
                      className="mr-1"
                    />
                    Verified purchase
                  </span>
                  <span className="text-lg block">
                    <strong>Ava</strong>, Little Rock, Arkansas
                  </span>
                  <span className="block text-gray-400">
                    Purchased 6 bottles of Cortiway
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <Image src={ba5} alt="before-after" className="mx-auto" />
                <div className="bg-gradient-to-t from-black to-transparent  w-full bottom-0 absolute text-white text-center p-5 md:p-2">
                  "As a working mother of three, finding time to take care of
                  myself was always a challenge. But when I discovered this
                  everything changed."
                </div>
              </div>
              <div className="flex mt-2">
                <div>
                  <Image
                    src={sixBottles}
                    width={60}
                    className="mr-3"
                    alt="product"
                  />
                </div>
                <div>
                  <span className="flex text-green-600 ">
                    <Image
                      src={exGreen}
                      alt=""
                      width={18}
                      height={18}
                      className="mr-1"
                    />
                    Verified purchase
                  </span>
                  <span className="text-lg block">
                    <strong>Harper</strong>, Augusta, Georgia
                  </span>
                  <span className="block text-gray-400">
                    Purchased 6 bottles of Cortiway
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <Image src={ba6} alt="before-after" className="mx-auto" />
                <div className="bg-gradient-to-t from-black to-transparent w-full bottom-0 absolute text-white text-center p-5 md:p-2">
                  "I feel lighter on my feet and my joints feel supple and pain
                  free."
                </div>
              </div>
              <div className="flex mt-2">
                <div>
                  <Image
                    src={threeBottles}
                    width={60}
                    className="mr-3"
                    alt="product"
                  />
                </div>
                <div>
                  <span className="flex text-green-600 ">
                    <Image
                      src={exGreen}
                      alt=""
                      width={18}
                      height={18}
                      className="mr-1"
                    />
                    Verified purchase
                  </span>
                  <span className="text-lg block">
                    <strong>Amelia</strong>, Tulsa, Oklahoma
                  </span>
                  <span className="block text-gray-400">
                    Purchased 3 bottles of Cortiway
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <Image src={ba7} alt="before-after" className="mx-auto" />
                <div className="bg-gradient-to-t from-black to-transparent w-full bottom-0 absolute text-white text-center p-5 md:p-2">
                  "My energy is through the roof and I feel like I can take on
                  the world!"
                </div>
              </div>
              <div className="flex mt-2">
                <div>
                  <Image
                    src={sixBottles}
                    width={60}
                    className="mr-3"
                    alt="product"
                  />
                </div>
                <div>
                  <span className="flex text-green-600 ">
                    <Image
                      src={exGreen}
                      alt=""
                      width={18}
                      height={18}
                      className="mr-1"
                    />
                    Verified purchase
                  </span>
                  <span className="text-lg block">
                    <strong>Mia</strong>, Birmingham, Alabama
                  </span>
                  <span className="block text-gray-400">
                    Purchased 6 bottles of Cortiway
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <Image src={ba8} alt="before-after" className="mx-auto" />
                <div className="bg-gradient-to-t from-black to-transparent w-full bottom-0 absolute text-white text-center p-5 md:p-2">
                  "Now I finally know why ALL my previous weight loss journeys
                  ended in failure..."
                </div>
              </div>

              <div className="flex mt-2">
                <div>
                  <Image
                    src={sixBottles}
                    width={60}
                    className="mr-3"
                    alt="product"
                  />
                </div>
                <div>
                  <span className="flex text-green-600 ">
                    <Image
                      src={exGreen}
                      alt=""
                      width={18}
                      height={18}
                      className="mr-1"
                    />
                    Verified purchase
                  </span>
                  <span className="text-lg block">
                    <strong>Isabella</strong>, Jackson, Mississippi
                  </span>
                  <span className="block text-gray-400">
                    Purchased 6 bottles of Cortiway
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div classname="mb-10">
            <h3></h3>
          </div>

          <div className="container mx-auto mt-10">
            <div className="pt-[50px]">
              <div className="bg-[#e03162] text-white p-5 rounded-t-lg">
                Get a <strong>FREE fat burner!</strong> Only available from
                October 11th to {getFormattedDate()}, or while stocks last!
                Offer ends in:{" "}
                <strong>
                  {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                </strong>
              </div>
              <div className="grid grid-cols-12 gap-4 border border-[#e03162] p-4 ">
                <div className="col-span-12 md:col-span-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                      <h3 className="font-semibold text-2xl mb-5 text-center">
                        Fat Burner
                      </h3>
                      <Image
                        src={fatBurner}
                        alt="Fat burner"
                        height={200}
                        className="mx-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <div className="mb-3  text-lg">
                    Fat Burner with MCT is designed to boost weight loss
                  </div>

                  <div className="flex">
                    <div className="pr-3">
                      <Image
                        src={f1}
                        alt="Weigth control"
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className="pr-3">
                      <Image
                        src={f2}
                        alt="Weigth control"
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className="pr-3">
                      <Image
                        src={f3}
                        alt="Weigth control"
                        height={50}
                        width={50}
                      />
                    </div>
                    <div>
                      <Image
                        src={f4}
                        alt="Weigth control"
                        height={50}
                        width={50}
                      />
                    </div>
                  </div>

                  <div className="mt-10 mb-2 text-orange-600">
                    Only 17 / 1000 left in stock!
                  </div>
                  <div className="h-2 bg-gray-100 mb-5">
                    <div className="w-3 bg-red-400 h-2"></div>
                  </div>
                </div>
              </div>
            </div>
            <>
              <div className="bg-[#e03162] p-3 rounded-b text-white relative overflow-hidden z-[10]">
                <div className="flex items-center">
                  <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white flex items-center justify-center">
                    <Image src={gift} alt="Gift" height={25} width={25} />
                  </div>
                  <span className="block ml-5 text-md md:text-lg">
                    <strong> Order now</strong> and get it delivered for free!{" "}
                  </span>
                  <p className="text-2xl ml-5"></p>
                </div>
              </div>
              <div className="flex items-center justify-center z-[-1]">
                <div className="bg-[#e03162] w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
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
            <div>
              <div className="text-center text-xl mb-2 font-semibold mt-5">
                Our customers say:
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-[#00b779] p-1 mr-1">
                  <Image src={starWhite} width={30} height={30} alt="star" />
                </div>
                <div className="bg-[#00b779] p-1 mr-1">
                  <Image src={starWhite} width={30} height={30} alt="star" />
                </div>
                <div className="bg-[#00b779] p-1 mr-1">
                  <Image src={starWhite} width={30} height={30} alt="star" />
                </div>
                <div className="bg-[#00b779] p-1 mr-1">
                  <Image src={starWhite} width={30} height={30} alt="star" />
                </div>
                <div className="bg-[#00b779] p-1 mr-3">
                  <Image src={starWhite} width={30} height={30} alt="star" />
                </div>
                <div className="text-xl">4.93/5</div>
              </div>
              <div className="text-center mt-2">Based on 120,000+ reviews</div>
            </div>
          </div>

          {/* <Reviews /> */}

          <h2 className="text-4xl text-center py-10 mt-10">
            Ashwagandha benefits covered in:
          </h2>
          <Covered />

          <div className="mt-5">{/* <Timer /> */}</div>
          {/* <Image src={bundle} width={1028} className="mx-auto" alt="Bundle" /> */}
        </div>
        <div className="bg-gray-100 py-10">
          <h2 className="text-4xl text-center py-10 mb-10">
            Frequently asked questions by our customers
          </h2>
          <Faq />
        </div>
      </div>
      <Footer />
    </>
  );
}

export const ResultsContainer = styled.div`
  text-align: center;
  color: ${COLORS.black};
  h1 {
    font-family: ${FONTS.primary};
    line-height: 1.2;
    font-weight: 600;
  }
  h3 {
    font-size: 18px;
    font-weight: 300;
    padding: 20px 0px;
  }
`;
export const ResultsBox = styled.div`
  margin: 30px 0px;
  text-align: left;
  background: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 5px 15px rgba(0, 9, 55, 0.05));

  p {
    padding: 20px 0px;
    font-weight: 300;
    line-height: 1.5;
  }
  @media (max-width: ${sizes.sm}) {
    margin: 15px 0px;
    margin-top: 0;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;
  span {
    text-decoration: underline;
    font-weight: 300;
    font-size: 14px;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const ScoreBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eef5f9;
  width: fit-content;
  width: 72px;
  height: 72px;
  border-radius: 36px;
  text-align: center;

  @media (max-width: ${sizes.sm}) {
    width: 50px;
    height: 50px;
  }

  h4 {
    color: ${(props) => props.color};
    font-family: ${FONTS.primary};
    font-size: 40px;
    @media (max-width: ${sizes.sm}) {
      font-size: 30px;
    }
  }
`;

export const TimeLine = styled.div`
  display: flex;
`;
export const TimeBox = styled.div`
  width: 100%;
  border-right: 2px solid #e5e6eb;
  padding: 8px 0px;
  position: relative;
  text-align: center;
`;
export const Line = styled.div`
  width: 100%;
  height: 5px;
  background: ${(props) => (props.bg ? props.bg : "#e5e6eb")};
`;

export const SmallScore = styled.span`
  display: block;
  font-size: 13px;
  padding-top: 10px;
  font-weight: 600;
`;

export const ScoreDesc = styled.span`
  display: block;
  padding: 5px 0px;
  font-size: 11px;
  font-weight: 300;
`;

export const Bubble = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${(props) => props.bg};
  top: 0;
  left: 48%;
  border: 2px solid #fff;
`;

export const Risk = styled.div`
  position: absolute;
  left: 32%;
  border: 1px solid #ddd;
  bottom: 25px;
  font-size: 13px;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  @media (max-width: ${sizes.sm}) {
    font-size: 10px;
  }
`;

export const AfterResults = styled.div`
  h2 {
    text-align: center;
    font-size: 2em;
    font-family: ${FONTS.primary};
    line-height: 1.2;
    font-weight: 600;
  }
`;

export const FactsContainer = styled.div`
  display: flex;
  margin: 50px 0px;
  align-items: center;
  @media (max-width: ${sizes.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Percent = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.color};
  min-width: 90px;
`;
export const Fact = styled.div`
  p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
    padding-left: 30px;
    color: ${COLORS.black};
    @media (max-width: ${sizes.sm}) {
      padding-left: 0;
    }
  }
`;

export const YourActionPlan = styled.div`
  h2 {
    font-size: 40px;
    line-height: 1.5;
    font-family: ${FONTS.primary};
    padding: 50px 0px;
  }
  h3 {
    padding: 20px 0px;
    font-size: 16px;
  }
  img {
    min-height: 165px;
  }
  padding-bottom: 80px;
  background: #fff;
  text-align: center;
  p {
    font-weight: 300;
    line-height: 1.5;
    color: ${COLORS.black};
    padding-bottom: 30px;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 95%;
  background: #fff;
  box-shadow: 1px 1px 10px #888;
  padding: 30px;
  border-radius: 5px;
  :focus-visible {
    outline: none;
  }
`;
export const ScoreText = styled.div`
  span {
    font-size: 15px;
    margin-top: 20px;
    display: block;
    color: ${(props) => props.color}!important;
    font-weight: bold;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-weight: 500;
  }
  border-bottom: 1px solid #eef5f9;
  padding-bottom: 30px;
`;

export const CloseButton = styled.div`
  background: #eef5f9;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  text-align: center;
  padding-top: 15px;
  cursor: pointer;
  &:hover {
    background: #e7f2f8;
  }
`;

export const ScoreContainer = styled.div`
  background: ${(props) => (props.bg ? props.bg : "#f5f5f5")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  padding: 20px 30px;
  border-radius: 10px 10px 0px 0px;
  @media (max-width: ${sizes.sm}) {
    margin-bottom: 35px;
  }
  h2 {
    font-size: 25px;
    @media (max-width: ${sizes.sm}) {
      font-size: 17px;
    }
  }
  span {
    border-bottom: 2px dotted #000;
  }
`;
export const ResultsContent = styled.div`
  padding: 30px;
`;

export const CheckoutContainer = styled.div`
  padding: 50px 0px;
  background: #fff;
`;

export const ArrowBg = styled.div`
  text-align: center;
  position: relative;
  animation: moveUpDown 2s infinite;

  img {
    transform: rotate(90deg);
    margin-top: -30px;
  }

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(
        -20px
      ); /* Adjust the value to control the upward movement */
    }
    100% {
      transform: translateY(0);
    }
  }
`;
