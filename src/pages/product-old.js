/* eslint-disable @next/next/next-script-for-ga */
import React from "react";
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
import product1 from "../assets/images/p1.jpg";
import product2 from "../assets/images/p2.jpg";
import stressIcon from "../../public/icons/calm.png";
import sleepIcon from "../../public/icons/sleeping.png";
import weight from "../../public/icons/gain-weight.png";
import energyIcon from "../../public/icons/energy.png";
import bundle from "../assets/images/bundle.png";
import ListItem from "@/components/ListItem";
import { Timer } from "@/components/Timer";
import security from "../../src/assets/icons/security.png";
import Covered from "@/components/Covered";
import PromoDelivery from "@/components/PromoDelivery";
import pumpkin from "../assets/icons/pumpkin.svg";
import { ReviewsWithImage } from "@/views/home/ReviesWithImage";
import { PRODUCTS } from "@/content/products";
import Product from "@/components/Product";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";

export default function ProductPage() {
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
        <title>Cortiway.com - Fell Yourself Again</title>
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
              {/* Manage Stress, Support Healthy Weight, Improve Sleep and Energize
              Your Day! */}
              Feel Balanced: Reduce Stress, Improve Sleep, and Boost Energy with
              Cortiway 🤩
            </h1>
            <h2 className="font-semibold mb-5">
              Cortiway reduces high cortisol levels, which helps:
            </h2>
            <ul className="">
              <ListItem
                icon={stressIcon}
                title="Build stress resilence"
                description="Reduces stress, improves coping"
              />
              <ListItem
                icon={sleepIcon}
                title="Improve sleep quality"
                description="Enhances restful, deep sleep"
              />
              <ListItem
                icon={weight}
                title="Regulate metabolism"
                description="Balances hormones, supports digestion"
              />

              <ListItem
                icon={energyIcon}
                title="Normalize energy levels"
                description="Boosts vitality, reduces fatigue"
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
                  src={product1}
                  className="mx-auto px-0 md:px-10 rounded object-cover rounded-lg"
                  fill
                  alt="Product"
                />
              </div>
              <div className="relative h-[320px] md:h-[320px] lg:h-[550px] rounded-lg">
                <Image
                  src={product2}
                  className="mx-auto px-0 md:px-10 rounded object-cover rounded-lg"
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
            <PromoDelivery />
          </div>
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

          <div className="mt-5 w-full">
            <Image
              src={security}
              alt="Security"
              className="mx-auto"
              height={40}
            />
          </div>
          <h2 className="text-4xl text-center py-10 mb-10">
            What our customers say about Cortiway
          </h2>

          <Reviews />

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
