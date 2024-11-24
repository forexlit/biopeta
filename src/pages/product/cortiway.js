/* eslint-disable @next/next/next-script-for-ga */
import React, { useState, useEffect } from "react";
import { TopNavigation } from "@/components/TopNavigation";
import { Footer } from "@/views/Footer";
import Head from "next/head";
import { Button } from "@/components/Button";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sale from "../../assets/icons/hot-sale.png";
import { PRODUCTS, WEIGHTLOSS } from "@/content/products";
import Product from "@/components/Product";
import Faq from "@/components/Faq";
import gift from "../../assets/icons/gift.png";
import moneyBack from "../../assets/icons/money.png";
import { useRouter } from "next/router";
import shippingIcon from "../../assets/icons/shipping3.svg";
import deliveryIcon from "../../assets/icons/delivery.svg";
import moneyBackIcon from "../../assets/icons/money-back.svg";

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
    <div className="">
      <Head>
        <title>Cortiway.com - Cortiway Premium Product</title>
        <meta name="description" content="Cortiway Premium Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-black text-white text-center p-2 flex items-center justify-center ">
        <div>
          <Image src={sale} alt="Sale" height={25} className="mr-4" />
        </div>
        <span>BLACK FRIDAY MONTH: </span>
        <strong className="ml-2"> UP TO -43% OFF!</strong>
      </div>
      <div className="py-0 md:py-5">
        <TopNavigation />
      </div>

      <div className="">
        <div className="container mx-auto">
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
            Let bacteria do the work for you
          </h2>
          <div className="grid grid-cols-12 gap-4">
            {PRODUCTS.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
        </div>
        <div className="">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-2 mt-5">
              <div className="col-span-4 border-r pr-0 md:pr-5 text-center  text-sm">
                <Image
                  src={shippingIcon}
                  alt="Free shipping"
                  height={20}
                  className="mx-auto mb-2"
                />
                Free & Fast Shipping
              </div>
              <div className="col-span-4  border-r px-0 md:px-5 text-center text-sm">
                <Image
                  src={deliveryIcon}
                  alt="Free shipping"
                  height={20}
                  className="mx-auto mb-2"
                />
                2-6 Day US Delivery
              </div>
              <div className="col-span-4  px-0 md:px-5 text-center text-sm">
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
