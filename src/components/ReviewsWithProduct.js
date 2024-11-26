import React from "react";
import Image from "next/image";
import { REVIEWS } from "@/content/reviews";
import threeProduct from "../../public/product/biopeta/3.png";
import sixProduct from "../assets/products/colon/6.jpg";
import twoProduct from "../../public/product/biopeta/2.png";
import oneProduct from "../../public/product/biopeta/1.png";
import verified from "../assets/icons/verified2.svg";
import starYellow from "../assets/icons/star-yellow.svg";
import thumb from "../assets/icons/thumb.svg";

import ba11 from "../../public/ba/11.jpg";
import chart from "../assets/images/chart.png";
import r1 from "../../public/reviews/r3.png";
import flag from "../assets/icons/flag.svg";
const ReviewsWithProduct = () => {
  return (
    <div>
      <div className="bg-[#ebfafe] ">
        <div className="container mx-auto mb-10">
          <div className="grid grid-cols-12 gap-4 bg-[#1d97bd] rounded-b-lg ">
            <div className="col-span-12 md:col-span-3 p-5 pb-0">
              <div className="h-[100px] md:h-[200px] relative">
                <Image
                  src={chart}
                  fill
                  alt="Chart"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 text-center md:text-left p-5 pt-0 md:pt-5">
              <span className="text-5xl md:text-[80px] font-semibold text-white leading-none">
                86%{" "}
              </span>
              <span className="text-white text-2xl block uppercase">
                of consumers noticed signifantly less shedding*
              </span>
              <div className=" py-10 text-white text-sm md:text-lg">
                *this statement is based on data collected from a post-purchase
                survey conducted in June 2024.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center z-[-1]">
            <div className="bg-[#1d97bd] w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
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
                                src={twoProduct}
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
                          {/* {review.product === 1 && (
                            <p className="text-xs">1-Month Supply</p>
                          )}
                          {review.product === 3 && (
                            <p className="text-xs">3-Months Supply</p>
                          )}
                          {review.product === 6 && (
                            <p className="text-xs">6-Months Supply</p>
                          )} */}
                          <h4 className="font-semibold leading-none">
                            BioPeta Anti-Shedding Cream
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
