/* eslint-disable @next/next/next-script-for-ga */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TopNavigation } from "@/components/TopNavigation";
import { FONTS } from "@/styles/fonts";
import { COLORS } from "@/styles/colors";
import Image from "next/image";
import { sizes } from "@/styles/breakpoints";
import { Footer } from "@/views/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ReviewsWithImage } from "@/views/home/ReviesWithImage";
import { Button } from "@/components/Button";
import you from "../assets/images/high-cortisol-men.png";
import you2 from "../assets/images/high-cortisol-woman.png";
import exRed from "@/assets/icons/ex-red.svg";
import exOrange from "@/assets/icons/ex-orange.svg";
import exGreen from "@/assets/icons/ex-green.svg";
import Level from "@/components/Level";
import doctor from "../assets/images/doctors/doctor1.jpg";
import signature from "../assets/images/signature.png";
import ListItem from "@/components/ListItem";
import stressed from "../../public/icons/stressed.png";
import stomach from "../../public/icons/stomach.png";
import sleepIcon from "../../public/icons/sleeping.png";
import weightGain from "../../public/icons/weightgain.svg";
import Reviews from "@/components/Reviews";
import starWhite from "@/assets/icons/star-white.png";

export default function Summary() {
  const [finalScore, setFinalScore] = useState(null);
  const [gender, setGender] = useState("Female");
  const [concern, setConcern] = useState(null);
  const [scoreColor, setScoreColor] = useState("");
  const [risk, setRisk] = useState(null);
  const [email, setEmail] = useState("");
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [isJoinLoading, setIsJoinLoading] = useState(false);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Retrieve the answers from the cookie
    const savedAnswers = Cookies.get("answers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const finalScoreCookies = Cookies.get("finalScoreCookie");
  const concernCookies = Cookies.get("concern");
  const emailCookies = Cookies.get("email");
  const negativeQuestions = Cookies.get("negativeQuestions");
  const router = useRouter();

  useEffect(() => {
    if (finalScoreCookies) {
      setFinalScore(finalScoreCookies);
    }
    if (emailCookies) {
      setEmail(emailCookies);
    }
    if (concernCookies) {
      setConcern(concernCookies);
    }
    if (finalScoreCookies >= 3) {
      setRisk("high");
      setScoreColor(COLORS.red);
    } else if (finalScoreCookies >= 1) {
      setRisk("elevated");
      setScoreColor(COLORS.yellow);
    } else {
      setRisk("balanced");
      setScoreColor(COLORS.green);
    }
  }, []);

  const handleSeeProduct = async () => {
    setIsProductLoading(true);
    router.push("/product/3"); // Push to the next page
  };
  return (
    <>
      <Head>
        <title>Cortiway.com - Your Calculated Score</title>
        <meta name="description" content="Autism Outreach Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopNavigation />
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-3 py-10">
          <div className="col-span-12 md:col-span-7">
            <div className="rounded-lg bg-white p-5">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl">Your hormones</h3>{" "}
                {risk === "high" && (
                  <div className="bg-red-100 border border-red-300 rounded-md uppercase text-red-500 px-3 font-semibold">
                    OUT OF CONTROL
                  </div>
                )}
                {risk === "elevated" && (
                  <div className="bg-orange-100 border border-orange-300 rounded-md uppercase text-orange-500 px-3 font-semibold">
                    UNBALANCED
                  </div>
                )}
                {risk === "balanced" && (
                  <div className="bg-green-100 border border-green-300 rounded-md uppercase text-green-500 px-3 font-semibold">
                    BALANCED
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {gender && gender === "Female" ? (
                  <Image src={you2} alt="you" width={180} />
                ) : (
                  <Image src={you} alt="you" width={180} />
                )}
              </div>
              <div className="grid grid-cols-12 gap-0 bg-gray-100 rounded-lg">
                <div className="col-span-4 relative">
                  {risk === "balanced" && (
                    <>
                      <div className="bg-[#17616a] text-white absolute left-[20%] px-3 rounded bottom-[30px] text-sm py-1 w-[100px] text-center">
                        Your level
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white border absolute border-2 border-slate-400 left-[40%]"></div>
                    </>
                  )}
                  <div className="flex items-center">
                    <div className="w-full bg-green-300 h-3 border-r m-1 rounded-l-lg"></div>
                  </div>
                </div>

                <div className="col-span-4 relative">
                  {risk === "elevated" && (
                    <>
                      <div className="bg-[#17616a] text-white absolute left-[20%] px-3 rounded bottom-[30px] text-sm py-1 w-[100px] text-center">
                        Your level
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white border absolute border-2 border-slate-400 left-[40%]"></div>
                    </>
                  )}
                  <div className="flex items-center h-full">
                    <div className="w-full bg-orange-200 h-3 "></div>
                  </div>
                </div>

                <div className="col-span-4 relative">
                  {risk === "high" && (
                    <>
                      <div className="bg-red-600 text-white font-semibold absolute left-[20%] px-3 rounded bottom-[30px] text-sm py-1 w-[100px] text-center">
                        Your level
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white border absolute border-2 border-slate-400 left-[40%]"></div>
                    </>
                  )}
                  <div className="flex items-center">
                    <div className="w-full bg-red-300 h-3 border-r m-1 rounded-r-lg"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-2 mt-2 ">
                <div className="col-span-4 relative">
                  <span className="text-sm text-gray-500">Balanced</span>
                </div>
                <div className="col-span-4 flex items-center">
                  <span className="text-sm text-gray-500">Unbalanced</span>
                </div>
                <div className="col-span-4 flex items-center">
                  <span className="text-sm text-gray-500">Out of control</span>
                </div>
              </div>

              {risk === "high" && (
                <div>
                  <div className="bg-red-200 rounded-lg p-5 mt-5 grid grid-cols-12 gap-3 mb-3">
                    <div className="col-span-2 bg-red-100 rounded flex items-center justify-center h-[60px]">
                      <Image src={exRed} alt="Alert" width={30} />
                    </div>
                    <div className="col-span-10">
                      <h3 className="font-semibold mb-1 text-red-600 p-0 m-0 leading-none uppercase">
                        Your cortisol levels are high!
                      </h3>
                      <p className="leading-2 text-sm">
                        Cortisol is a hormone that regulates stress and
                        metabolism. When cortisol levels are high, it signals
                        that your body is under significant hidden stress,{" "}
                        <strong className="text-red-700">
                          which is already taking a toll on your health:
                        </strong>
                      </p>
                    </div>
                  </div>
                  {answers &&
                    answers.length > 0 &&
                    (answers[2] === "Yes" ||
                      answers[3] === "Yes" ||
                      answers[4] === "Yes") && (
                      <>
                        <div className="flex  p-2 mt-1">
                          <div className="mr-2">
                            <Image src={exRed} alt="Alert" width={15} />
                          </div>

                          <div className="">
                            <span className="font-semibold block leading-none text-red-600">
                              Storing more fat
                            </span>
                            <span className="text-xs block leading-1 mt-1 text-red-500">
                              High cortisol promotes fat storage, especially
                              around your abdomen, making it harder to lose
                              weight.
                            </span>
                          </div>
                        </div>
                        <div className="flex p-2 mt-1">
                          <div className="mr-2">
                            <Image src={exRed} alt="Alert" width={15} />
                          </div>

                          <div className="">
                            <span className="font-semibold block leading-none text-red-600">
                              Slowing down your metabolism
                            </span>
                            <span className="text-xs block leading mt-1 text-red-600">
                              Elevated cortisol can slow your metabolism, making
                              it more difficult to burn calories efficiently.
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  {answers && answers.length > 0 && answers[6] === "Yes" && (
                    <div className="flex p-2 mt-1">
                      <div className="mr-2">
                        <Image src={exRed} alt="Alert" width={15} />
                      </div>

                      <div className="">
                        <span className="font-semibold block leading-none text-red-600">
                          Disrupting your sleep
                        </span>
                        <span className="text-xs block leading-1 mt-1 text-red-600">
                          It interferes with your ability to fall asleep and
                          stay asleep, leaving you feeling tired and unrested
                        </span>
                      </div>
                    </div>
                  )}
                  {answers &&
                    answers.length > 0 &&
                    (answers[0] === "Yes" || answers[1] === "Yes") && (
                      <div className="flex  p-2 mt-1">
                        <div className="mr-2">
                          <Image src={exRed} alt="Alert" width={15} />
                        </div>

                        <div className="">
                          <span className="font-semibold block leading-none text-red-600">
                            Draining your energy
                          </span>
                          <span className="text-xs block leading-1 mt-1 text-red-600">
                            Persistent high cortisol levels can leave you
                            feeling fatigued and exhausted throughout the day.
                          </span>
                        </div>
                      </div>
                    )}
                  {answers && answers.length > 0 && answers[11] === "Yes" && (
                    <div className="flex  p-2 mt-1">
                      <div className="mr-2">
                        <Image src={exRed} alt="Alert" width={15} />
                      </div>

                      <div className="">
                        <span className="font-semibold block leading-none text-red-600">
                          Reducing libido
                        </span>
                        <span className="text-xs block leading-1 mt-1 text-red-600">
                          Chronic stress and elevated cortisol can lower your
                          sex drive, affecting intimacy and overall wellbeing.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {risk === "elevated" && (
                <>
                  <div className="bg-orange-100 rounded-lg p-5 mt-5 grid grid-cols-12 gap-3">
                    <div className="col-span-2 bg-orange-200 rounded flex items-center justify-center h-[60px]">
                      <Image src={exOrange} alt="Alert" width={30} />
                    </div>
                    <div className="col-span-10">
                      <h3 className="font-semibold mb-1 text-orange-600 p-0 m-0 leading-none uppercase">
                        Your cortisol levels are elevated!
                      </h3>
                      <p className="leading-2 text-sm">
                        Cortisol is a hormone that regulates stress, metabolism,
                        and immune function. Elevated cortisol means that your
                        body is dealing with a lot of hidden stress,{" "}
                        <strong className="text-red-700">
                          which is already taking a toll on your health:
                        </strong>
                      </p>
                    </div>
                  </div>
                  {answers &&
                    answers.length > 0 &&
                    (answers[2] === "Yes" ||
                      answers[3] === "Yes" ||
                      answers[4] === "Yes") && (
                      <>
                        <div className="flex  p-2 mt-1">
                          <div className="mr-2">
                            <Image src={exRed} alt="Alert" width={15} />
                          </div>

                          <div className="">
                            <span className="font-semibold block leading-none text-red-600">
                              Storing more fat
                            </span>
                            <span className="text-xs block leading-1 mt-1 text-red-500">
                              High cortisol promotes fat storage, especially
                              around your abdomen, making it harder to lose
                              weight.
                            </span>
                          </div>
                        </div>
                        <div className="flex p-2 mt-1">
                          <div className="mr-2">
                            <Image src={exRed} alt="Alert" width={15} />
                          </div>

                          <div className="">
                            <span className="font-semibold block leading-none text-red-600">
                              Slowing down your metabolism
                            </span>
                            <span className="text-xs block leading mt-1 text-red-600">
                              Elevated cortisol can slow your metabolism, making
                              it more difficult to burn calories efficiently.
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  {answers && answers.length > 0 && answers[6] === "Yes" && (
                    <div className="flex p-2 mt-1">
                      <div className="mr-2">
                        <Image src={exRed} alt="Alert" width={15} />
                      </div>

                      <div className="">
                        <span className="font-semibold block leading-none text-red-600">
                          Disrupting your sleep
                        </span>
                        <span className="text-xs block leading-1 mt-1 text-red-600">
                          It interferes with your ability to fall asleep and
                          stay asleep, leaving you feeling tired and unrested
                        </span>
                      </div>
                    </div>
                  )}
                  {answers &&
                    answers.length > 0 &&
                    (answers[0] === "Yes" || answers[1] === "Yes") && (
                      <div className="flex  p-2 mt-1">
                        <div className="mr-2">
                          <Image src={exRed} alt="Alert" width={15} />
                        </div>

                        <div className="">
                          <span className="font-semibold block leading-none text-red-600">
                            Draining your energy
                          </span>
                          <span className="text-xs block leading-1 mt-1 text-red-600">
                            Persistent high cortisol levels can leave you
                            feeling fatigued and exhausted throughout the day.
                          </span>
                        </div>
                      </div>
                    )}
                  {answers && answers.length > 0 && answers[11] === "Yes" && (
                    <div className="flex  p-2 mt-1">
                      <div className="mr-2">
                        <Image src={exRed} alt="Alert" width={15} />
                      </div>

                      <div className="">
                        <span className="font-semibold block leading-none text-red-600">
                          Reducing libido
                        </span>
                        <span className="text-xs block leading-1 mt-1 text-red-600">
                          Chronic stress and elevated cortisol can lower your
                          sex drive, affecting intimacy and overall wellbeing.
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}

              {risk === "balanced" && (
                <div className="bg-green-100 rounded-lg p-5 mt-5 grid grid-cols-12 gap-3">
                  <div className="col-span-2 bg-green-200 rounded flex items-center justify-center h-[60px]">
                    <Image src={exGreen} alt="Alert" width={45} />
                  </div>
                  <div className="col-span-10">
                    <h3 className="font-semibold mb-1 text-green-600 p-0 m-0 leading-none uppercase">
                      Your cortisol levels are balanced!
                    </h3>
                    <p className="leading-2 text-sm">
                      Cortisol is a hormone that regulates stress, metabolism,
                      and immune function. Your cortisol levels are balanced,
                      which is great. However, you can still join our 14-day
                      challenge to maintain your cortisol levels.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            {/* <div className="bg-white p-5 rounded-lg mb-5">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6">
                  <span className="bg-red-300 py-1 px-3 rounded mb-5 block font-semibold">
                    Now
                  </span>
                  <span className="font-semibold block">Energy levels</span>
                  {risk === "high" && (
                    <>
                      <span className="block leading-none mb-3 text-xs text-gray-400">
                        Low energy, constant fatigue
                      </span>
                      <Level positive={false} color="bg-red-300" filled={1} />
                    </>
                  )}
                  {risk === "elevated" && (
                    <>
                      <span className="block leading-none mb-3 text-xs text-gray-400">
                        Low energy, fatigue
                      </span>
                      <Level positive={false} color="bg-red-300" filled={2} />
                    </>
                  )}
                  {risk === "balanced" && (
                    <>
                      <span className="block leading-none mb-3 text-xs text-gray-400">
                        Normal energy levels
                      </span>
                      <Level
                        positive={false}
                        color="bg-orange-300"
                        filled={2}
                      />
                    </>
                  )}

                  <span className="font-semibold block mt-5">Cortisol</span>

                  {risk === "high" && (
                    <>
                      <span className="block leading-none mb-3 text-xs text-gray-400">
                        High levels, anxiety, weight gain
                      </span>
                      <Level positive={false} color="bg-red-300" filled={4} />
                    </>
                  )}
                  {risk === "elevated" && (
                    <>
                      <span className="block leading-none mb-3 text-xs text-gray-400">
                        Elevated, anxiety, weight gain
                      </span>
                      <Level positive={false} color="bg-red-300" filled={3} />
                    </>
                  )}
                  {risk === "balanced" && (
                    <>
                      <span className="block leading-none mb-3 text-xs text-gray-400">
                        Balanced, normal levels
                      </span>
                      <Level positive={true} color="bg-green-300" filled={2} />
                    </>
                  )}
                  <span className="font-semibold  block mt-5">Metabolism</span>
                  <>
                    <span className="block leading-none mb-3 text-xs text-gray-400">
                      Sluggish, weight gain, fatigue
                    </span>
                    <Level positive={false} color="bg-red-300" filled={1} />
                  </>
                  <span className="font-semibold block mt-5">Stress</span>
                  <>
                    <span className="block leading-none mb-3 text-xs text-gray-400">
                      Overwhelming, irritability
                    </span>
                    <Level positive={false} color="bg-red-300" filled={3} />
                  </>
                </div>
                <div className="col-span-6">
                  <span className="bg-[#5aba7d] py-1 px-3 rounded block font-semibold mb-5 text-white">
                    Your goal
                  </span>
                  <span className="font-semibold  block">Energy levels</span>
                  <>
                    <span className="block leading-none mb-3 text-xs text-gray-400">
                      Vibrant, full of energy
                    </span>
                    <Level positive={true} color="bg-green-300" filled={4} />
                  </>

                  <span className="font-semibold block mt-5">Cortisol</span>
                  <>
                    <span className="block leading-none mb-3 text-xs text-gray-400">
                      Balanced, calm, focused
                    </span>
                    <Level positive={true} color="bg-red-300" filled={1} />
                  </>

                  <span className="font-semibold block mt-5">Metabolism</span>
                  <>
                    <span className="block leading-none mb-3 text-xs text-gray-400">
                      Efficient, burns fat, healthy weight
                    </span>
                    <Level positive={true} color="bg-red-300" filled={3} />
                  </>

                  <span className="font-semibold  block mt-5">Stress</span>
                  <span>
                    <span className="block leading-none mb-3 text-xs text-gray-400">
                      Relaxed, resilient, clear-minded
                    </span>
                    <Level positive={true} color="bg-red-300" filled={1} />
                  </span>
                </div>
              </div>
            </div> */}
            <div className="pt-10 md:pt-0">
              <h3 className="text-4xl text-center mb-5">
                You Can Balance Your Hormones and Significantly{" "}
                <strong className="text-pink-600">
                  Reduce Cortisol Levels in Just 30 Days!
                </strong>
              </h3>
              <h4 className="text-center text-lg font-semibold mb-10">
                Without drastic lifestyle changes, harsh diets, or endless
                expensive supplements.
              </h4>
            </div>

            <div>
              <ul className="px-10 py-5 md:py-0">
                <ListItem
                  icon={weightGain}
                  title="Prevent New Fat Storage"
                  description="Stop the accumulation of stubborn fat"
                />
                <ListItem
                  icon={stressed}
                  title="Reduce Stress and Anxiety"
                  description="Feel calmer and more in control"
                />
                <ListItem
                  icon={stomach}
                  title="Regulate metabolism"
                  description="Allow your body to burn calories more efficiently"
                />

                <ListItem
                  icon={sleepIcon}
                  title="Improve Sleep & Recovery"
                  description="Wake up feeling fully refreshed and energized"
                />

                <li></li>
              </ul>
            </div>
            <div className="mx-auto text-center">
              <h2 className="text-2xl mb-10 px-2">
                {" "}
                Why wait?{" "}
                <strong className="text-pink-600">
                  Improve your life faster
                </strong>{" "}
                with Cortiway!
              </h2>
              <Button
                className="mx-auto"
                onClick={handleSeeProduct}
                isLoading={isProductLoading}
                disabled={isProductLoading}
                bg="#db2877"
              >
                See the Product
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-[100px]">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center font-semibold text-4xl mb-[80px]">
              A Personal Message from{" "}
              <span className="text-pink-600"> Our Head of Nutrition</span>
            </h3>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <Image
                src={doctor}
                alt="Nutritionist"
                height={500}
                className="rounded-lg mb-5"
              />
            </div>
            <div className="col-span-12 md:col-span-6 text-lg content">
              <p className="font-semibold">
                We believe that everyone deserves to live their lives with
                confidence.{" "}
              </p>
              <p>
                Most diets or supplements don’t work because your hormones are
                unbalanced. You can’t go against nature.
              </p>
              <p>
                At Cortiway, we understand that everything affects your
                weight-loss journey, especially your hormones. That’s why our
                approach is centered around balance, not restrictions. With the
                help of Ashwagandha, our formula supports your body’s natural
                ability to manage stress and balance hormones, making your
                journey to a healthier you smoother and more enjoyable. We
                believe you should feel empowered, not restricted, every step of
                the way.
              </p>
              <p>
                So, don’t blame yourself. It’s really hard. That’s why our team
                of nutritionists is here to support you with effective, simple
                solutions that work with your body, not against it. We're
                committed to making your weight-loss journey easier and more
                sustainable, so you can feel confident and empowered.
              </p>
              <div className="flex items-center">
                <h4 className="font-semibold text-xl py-5 mr-2">
                  Samantha L.,
                </h4>{" "}
                <span>Head of Nutrition, Cortiway</span>
              </div>
              <Image
                src={signature}
                alt="signature"
                height={100}
                className="mb-5"
              />
              <Button
                bg="#db2877"
                onClick={handleSeeProduct}
                isLoading={isProductLoading}
                disabled={isProductLoading}
              >
                See the Product
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[100px]">
        <div className="container mx-auto">
          <h3 className="text-center font-semibold text-4xl mb-10 w-[90%] md:w-[60%] mx-auto">
            Users Experience{" "}
            <span className="text-pink-600">
              {" "}
              Massive Changes in Less Than a Month
            </span>
          </h3>
          <div>
            {/* <div className="text-center text-xl mb-2 font-semibold mt-5">
              Our customers say:
            </div> */}
            <div className="flex items-center justify-center">
              <div className="bg-[#00b779] p-1 mr-1">
                <Image src={starWhite} width={25} height={25} alt="star" />
              </div>
              <div className="bg-[#00b779] p-1 mr-1">
                <Image src={starWhite} width={25} height={25} alt="star" />
              </div>
              <div className="bg-[#00b779] p-1 mr-1">
                <Image src={starWhite} width={25} height={25} alt="star" />
              </div>
              <div className="bg-[#00b779] p-1 mr-1">
                <Image src={starWhite} width={25} height={25} alt="star" />
              </div>
              <div className="bg-[#00b779] p-1 mr-3">
                <Image src={starWhite} width={25} height={25} alt="star" />
              </div>
              <div className="text-xl">4.93/5</div>
            </div>
            <div className="text-center mt-2">Based on 20,000+ reviews</div>
          </div>
          <div className="pt-10">
            <Reviews />
          </div>
          <div className="mt-10">
            <Button
              bg="#db2877"
              onClick={handleSeeProduct}
              isLoading={isProductLoading}
              disabled={isProductLoading}
              className="mx-auto"
            >
              See the Product
            </Button>
          </div>
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
  margin: 0px;
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

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin: 0 auto;
  display: flex;
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
