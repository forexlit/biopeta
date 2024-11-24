import React from "react";
import Image from "next/image";
import { REVIEWS } from "@/content/reviews";
import threeProduct from "../assets/products/colon/3.jpg";
import sixProduct from "../assets/products/colon/6.jpg";
import oneProduct from "../assets/products/colon/1.jpg";
import verified from "../assets/icons/verified2.svg";
import starYellow from "../assets/icons/star-yellow.svg";
import thumb from "../assets/icons/thumb.svg";
import moneyback from "../assets/icons/money.png";
import { Button } from "./Button";
import ba1 from "../../public/ba/f1.jpg";
import ba2 from "../../public/ba/2.jpg";
import ba3 from "../../public/ba/3.jpg";
import ba4 from "../../public/ba/4.jpg";
import ba5 from "../../public/ba/5.jpg";
import ba6 from "../../public/ba/6.jpg";
import ba0 from "../../public/ba/ba0.jpg";

import ba7 from "../../public/ba/7.jpg";
import ba8 from "../../public/ba/8.jpg";
import ba10 from "../../public/ba/ba10.png";
import ba12 from "../../public/ba/ba11.jpg";
import ba13 from "../../public/ba/ba12.jpg";
import ba14 from "../../public/ba/ba14.jpg";
import ba15 from "../../public/ba/ba15.png";

import ba11 from "../../public/ba/11.jpg";
import chart from "../assets/images/chart.png";
import r1 from "../../public/reviews/r3.png";
import flag from "../assets/icons/flag.svg";
import VideoPlayer from "./Video";

const ReviewsWithProduct = () => {
  return (
    <div>
      <div className="container mx-auto mb-5">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-3">
            {" "}
            <VideoPlayer />
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="bg-white p-5 rounded-lg h-full">
              <div className="flex">
                <Image
                  src={verified}
                  height={15}
                  alt="Verified"
                  className="mr-1"
                />
                <span className="text-green-600">Verified Buyer</span>
              </div>
              <div className="flex my-3">
                {Array(5)
                  .fill()
                  .map((_, index) => {
                    return (
                      <Image
                        key={index}
                        src={starYellow}
                        height={20}
                        alt="star"
                      />
                    );
                  })}
              </div>
              {/* After my 3rd baby I was sooo discouraged about the weight loss and how long it was taking for me to get back in the shape and I was talking to my friend about this and she suggested Cortiway Premium Blend to me   */}
              <strong className="text-xl font-semibold mb-3 block">
                "It's made all the difference!"
              </strong>
              "It’s seriously been so much better. I feel less bloated, I feel
              like my digestive issues are better, and it’s been a game changer
              for me. I honestly would recommend this to anybody who's been
              struggling with their weight loss, especially after having kids."
              <div className="mt-2">
                <Image src={ba0} alt="Weight loss" height={250} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fdf0ec] ">
        {/* <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-3 md:col-span-2">
              <Image src={ba1} alt="Weight loss" />
            </div>
            <div className="col-span-3 md:col-span-2">
              <Image src={ba2} alt="Weight loss" />
            </div>
            <div className="col-span-3 md:col-span-2">
              <Image src={ba3} alt="Weight loss" />
            </div>
            <div className="col-span-3 md:col-span-2">
              <Image src={ba4} alt="Weight loss" />
            </div>
            <div className="col-span-3 md:col-span-2">
              <Image src={ba5} alt="Weight loss" />
            </div>
            <div className="col-span-3 md:col-span-2">
              <Image src={ba6} alt="Weight loss" />
            </div>
            <div className="col-span-3 md:hidden">
              <Image src={ba10} alt="Weight loss" />
            </div>
            <div className="col-span-3 md:hidden ">
              <Image src={ba11} alt="Weight loss" />
            </div>
          </div>
        </div> */}

        <div className="container mx-auto mb-10">
          <div className="grid grid-cols-12 gap-4 bg-[#ff789e] rounded-b-lg ">
            <div className="col-span-12 md:col-span-3 p-5 pb-0">
              <div className="h-[130px] md:h-[200px] relative">
                <Image
                  src={chart}
                  fill
                  alt="Chart"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 text-center md:text-left p-5 pt-5">
              <span className="text-5xl md:text-[80px] font-semibold text-white leading-none">
                86%{" "}
              </span>
              <span className="text-white text-2xl block uppercase">
                of users experienced weight loss*
              </span>
              <div className=" py-10 text-white text-sm md:text-lg">
                *In a survey involving 2,203 participants, 86% of women who
                added Cortiway Premium to their morning routine started losing
                weight in the first 30 days... without any changes to their diet
                or exercise.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center z-[-1]">
            <div className="bg-[#ff789e] w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
          </div>
        </div>
        <div className="container mx-auto">
          <div>
            {REVIEWS.map((review, index) => {
              return (
                <div key={index} className="mb-5 border rounded-lg">
                  <div className="grid grid-cols-12 gap-4 bg-white rounded-lg ">
                    <div className="col-span-12 md:col-span-3 border-r p-5 pb-0 md:pb-5">
                      <div className="border-b pb-3">
                        <span className="flex items-center">
                          <strong className="text-lg"> {review.name}</strong>,{" "}
                          <Image
                            src={flag}
                            alt="USA"
                            width={15}
                            height={15}
                            className="ml-2 mr-1"
                          />{" "}
                          {review.country}
                        </span>
                        <div className="flex">
                          <Image
                            src={verified}
                            height={15}
                            alt="Verified"
                            className="mr-1"
                          />
                          <span className="text-green-600">Verified Buyer</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-2 pt-3">
                        <div className="col-span-6">
                          <div>
                            {review.product === 3 && (
                              <Image
                                src={threeProduct}
                                height={100}
                                alt="product"
                              />
                            )}
                            {review.product === 6 && (
                              <Image
                                src={sixProduct}
                                height={100}
                                alt="product"
                              />
                            )}
                            {review.product === 1 && (
                              <Image
                                src={oneProduct}
                                height={100}
                                alt="product"
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-span-6">
                          {review.product === 1 && (
                            <p className="text-xs">1-Month Supply</p>
                          )}
                          {review.product === 3 && (
                            <p className="text-xs">3-Months Supply</p>
                          )}
                          {review.product === 6 && (
                            <p className="text-xs">6-Months Supply</p>
                          )}
                          <h4 className="font-semibold leading-none">
                            Cortiway Premium
                          </h4>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={thumb}
                          alt="thumb"
                          height={18}
                          className="mr-2"
                        />
                        <span className="text-sm text-green-600">
                          I recommend this product
                        </span>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-9 pt-0 md:pt-5 p-5">
                      <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-12 md:col-span-10">
                          <div className="flex">
                            {Array(review.stars)
                              .fill()
                              .map((_, index) => {
                                return (
                                  <Image
                                    key={index}
                                    src={starYellow}
                                    height={20}
                                    alt="star"
                                  />
                                );
                              })}
                          </div>
                          <h4 className="font-semibold mt-2">{review.title}</h4>
                        </div>
                        <div className="text-sm col-span-12 md:col-span-2 text-gray-500">
                          {review.time}
                        </div>
                      </div>
                      {index === 0 && (
                        <Image
                          src={ba1}
                          alt="Before and After"
                          height={230}
                          className="mt-3"
                        />
                      )}
                      {index === 1 && (
                        <Image
                          src={ba10}
                          alt="Before and After"
                          height={230}
                          className="mt-3"
                        />
                      )}
                      {index === 2 && (
                        <Image
                          src={ba12}
                          alt="Before and After"
                          height={230}
                          className="mt-3"
                        />
                      )}
                      {index === 4 && (
                        <Image
                          src={ba13}
                          alt="Before and After"
                          height={230}
                          className="mt-3"
                        />
                      )}
                      {index === 5 && (
                        <Image
                          src={ba14}
                          alt="Before and After"
                          height={230}
                          className="mt-3"
                        />
                      )}
                      {index === 6 && (
                        <Image
                          src={ba15}
                          alt="Before and After"
                          height={230}
                          className="mt-3"
                        />
                      )}

                      <p className="mt-5 font-thin">{review.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsWithProduct;
