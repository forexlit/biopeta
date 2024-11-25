/* eslint-disable @next/next/next-script-for-ga */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyContext from "@/context/MyContext";
import { useContext } from "react";
import { TopNavigation } from "@/components/TopNavigation";
import { SmallContainer } from "@/components/SmallContainer";
import { FONTS } from "@/styles/fonts";
import { COLORS } from "@/styles/colors";
import infoSquare from "../assets/icons/info-square.svg";
import Image from "next/image";
import { Container, Grid } from "@mui/material";
import { sizes } from "@/styles/breakpoints";
import { Reviews } from "@/views/home/Reviews";
import { Footer } from "@/views/Footer";
import Head from "next/head";
import { Modal } from "@mui/material";
import close from "../assets/icons/times.svg";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import lightbulb from "../assets/icons/lightbulb.svg";
import join from "../assets/images/join.png";
import { Timer } from "../components/Timer";
import { ReviewsWithImage } from "@/views/home/ReviesWithImage";
import { How } from "@/views/results/How";
import { Oto } from "@/views/results/Oto";
import { Love } from "@/views/love";
import arrowDown from "../assets/icons/arrow_down.svg";
import { Notification } from "@/components/Notification";
import { Product } from "@/views/results/Product";
import { Book } from "@/views/results/Book";
import { Button } from "@/components/Button";
import { Checkout } from "@/views/checkout";
import Offer from "@/components/Offer";
import DidYouKnow from "@/components/DidYouKnow";
import x from "../assets/icons/arrow_down.svg";
import profile from "../assets/images/profile.png";
import beforeafter from "../assets/images/beforeafter.png";
import you from "../assets/images/high-cortisol-men.png";
import you2 from "../assets/images/high-cortisol-woman.png";
import exRed from "@/assets/icons/ex-red.svg";
import exOrange from "@/assets/icons/ex-orange.svg";
import exGreen from "@/assets/icons/ex-green.svg";
import Level from "@/components/Level";

export default function Summary() {
  const [finalScore, setFinalScore] = useState(null);
  const [gender, setGender] = useState(null);
  const [concern, setConcern] = useState(null);
  const [scoreColor, setScoreColor] = useState("");
  const [risk, setRisk] = useState(null);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Retrieve the answers from the cookie
    const savedAnswers = Cookies.get("answers");

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const finalScoreCookies = Cookies.get("finalScoreCookie");
  const genderCookies = Cookies.get("gender");
  const concernCookies = Cookies.get("concern");
  const emailCookies = Cookies.get("email");
  const negativeQuestions = Cookies.get("negativeQuestions");
  const router = useRouter();

  useEffect(() => {
    if (finalScoreCookies) {
      setFinalScore(finalScoreCookies);
    }
    if (genderCookies) {
      setGender(genderCookies);
    }
    if (emailCookies) {
      setEmail(emailCookies);
    }
    if (concernCookies) {
      setConcern(concernCookies);
    }
    if (finalScoreCookies >= 8) {
      setRisk("high");
      setScoreColor(COLORS.red);
    } else if (finalScoreCookies >= 3) {
      setRisk("elevated");
      setScoreColor(COLORS.yellow);
    } else {
      setRisk("balanced");
      setScoreColor(COLORS.green);
    }
  }, []);

  const handleJoin = async () => {
    try {
      const response = await fetch(`/api/updateSubscriber?email=${email}`);
      const data = await response.json(); // Assuming the response is JSON
      console.log(data); // Log the response data
      router.push("/day/1"); // Push to the next page
    } catch (error) {
      console.error("Error updating subscriber:", error); // Handle any errors
    }
  };
  return (
    <>
      <Head>
        <title>Biopeta.com - Your Calculated Score</title>
        <meta name="description" content="Autism Outreach Community" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YZD73N7T54"
        ></script>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-YZD73N7T54');
        gtag('event', 'conversion', {'send_to': 'AW-11157688895/6G8rCPu41qYYEL-ks8gp'});
      `,
          }}
        ></script> */}
      </Head>
      <TopNavigation />

      <SmallContainer>
        {/* <div className="container mx-auto">
          Final score: {finalScore} | Gender: {gender} | Consern: {concern}
        </div> */}
        <div className="rounded-lg bg-white p-5">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-xl">Cortisol level</h3>{" "}
            {risk === "high" && (
              <div className="bg-red-100 border border-red-300 rounded-md uppercase text-red-500 px-3 font-semibold">
                HIGH
              </div>
            )}
            {risk === "elevated" && (
              <div className="bg-orange-100 border border-orange-300 rounded-md uppercase text-orange-500 px-3 font-semibold">
                ELEVATED
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
              <Image src={you2} alt="you" width={200} />
            ) : (
              <Image src={you} alt="you" width={200} />
            )}
          </div>
          <div className="grid grid-cols-12 gap-0 bg-gray-100 rounded-lg">
            <div className="col-span-4 relative">
              {risk === "balanced" && (
                <>
                  <div className="bg-gray-600 text-white absolute left-[20%] px-3 rounded bottom-[30px] text-sm py-1 w-[100px] text-center">
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
                  <div className="bg-gray-600 text-white absolute left-[20%] px-3 rounded bottom-[30px] text-sm py-1 w-[100px] text-center">
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
                  <div className="bg-gray-600 text-white absolute left-[20%] px-3 rounded bottom-[30px] text-sm py-1 w-[100px] text-center">
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
              <span className="text-sm text-gray-500">Elevated</span>
            </div>
            <div className="col-span-4 flex items-center">
              <span className="text-sm text-gray-500">High</span>
            </div>
          </div>

          {risk === "high" && (
            <div className="bg-red-100 rounded-lg p-5 mt-5 grid grid-cols-12 gap-3">
              <div className="col-span-2 bg-red-200 rounded flex items-center justify-center h-[60px]">
                <Image src={exRed} alt="Alert" width={30} />
              </div>
              <div className="col-span-10">
                <h3 className="font-semibold mb-1 text-red-600 p-0 m-0 leading-none uppercase">
                  Your cortisol levels are high!
                </h3>
                <p className="leading-2 text-sm">
                  Cortisol is a hormone that regulates stress, metabolism, and
                  immune function. High cortisol means that your body is dealing
                  with a lot of hidden stress, which, over time, can really take
                  a toll on your health.
                  {/* High cortisol levels, if left unmanaged, can have significant
                long-term effects on health. */}
                </p>
              </div>
            </div>
          )}

          {risk === "elevated" && (
            <div className="bg-orange-100 rounded-lg p-5 mt-5 grid grid-cols-12 gap-3">
              <div className="col-span-2 bg-orange-200 rounded flex items-center justify-center h-[60px]">
                <Image src={exOrange} alt="Alert" width={30} />
              </div>
              <div className="col-span-10">
                <h3 className="font-semibold mb-1 text-orange-600 p-0 m-0 leading-none uppercase">
                  Your cortisol levels are elevated!
                </h3>
                <p className="leading-2 text-sm">
                  Cortisol is a hormone that regulates stress, metabolism, and
                  immune function. Elevated cortisol means that your body is
                  dealing with a lot of hidden stress, which, over time, can
                  really take a toll on your health.
                  {/* High cortisol levels, if left unmanaged, can have significant
                long-term effects on health. */}
                </p>
              </div>
            </div>
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
                  Cortisol is a hormone that regulates stress, metabolism, and
                  immune function. Your cortisol levels are balanced, which is
                  great. However, you can still join our 14-day challenge to
                  maintain your cortisol levels.
                  {/* High cortisol levels, if left unmanaged, can have significant
                long-term effects on health. */}
                </p>
              </div>
            </div>
          )}
        </div>
        {/* <Image src={profile} alt="Alert" width={700} /> */}
        {/* <div className="bg-white rounded-lg p-5 mt-5 grid grid-cols-12 gap-3">
          <div className="col-span-2 bg-red-200 rounded flex items-center justify-center">
            <Image src={exRed} alt="Alert" width={40} />
          </div>
          <div className="col-span-10">
            <h3 className="font-semibold mb-1 text-red-600 p-0 m-0 leading-none uppercase">
              Weight Gain and Obesity
            </h3>
            <p className="leading-2 text-sm">
              This means that your body is dealing with a lot of hidden stress,
              which, over time, can really take a toll on your health. High
              cortisol levels, if left unmanaged, can have significant long-term
              effects on health.
            </p>
          </div>
        </div> */}

        {/* <ResultsContainer>
          <ResultsBox>
            <ScoreContainer bg={scoreColor}>
              <h2 className="font-semibold">
                Your cortisol level: <span>{risk}</span>
              </h2>

              <ScoreBox color={scoreColor}>
                <h4>{finalScore ? finalScore : ""}</h4>
              </ScoreBox>
            </ScoreContainer>
            <ResultsContent>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <TimeBox>
                    {risk === "balanced" ? (
                      <>
                        <Risk>Balanced</Risk>
                        <Bubble bg={COLORS.green} />
                        <Line bg={COLORS.green} />
                      </>
                    ) : (
                      <Line />
                    )}
                  </TimeBox>
                  <SmallScore>0-2</SmallScore>
                  <ScoreDesc>Healthy</ScoreDesc>
                </Grid>
                <Grid item xs={4}>
                  <TimeBox>
                    {risk === "elevated" ? (
                      <>
                        <Risk>Above Normal</Risk>
                        <Bubble bg={COLORS.yellow} />
                        <Line bg={COLORS.yellow} />
                      </>
                    ) : (
                      <Line />
                    )}
                  </TimeBox>
                  <SmallScore>3-7</SmallScore>
                  <ScoreDesc>Unbalanced</ScoreDesc>
                </Grid>
                <Grid item xs={4}>
                  <TimeBox>
                    {risk === "high" ? (
                      <>
                        <Risk>High</Risk>
                        <Bubble bg={COLORS.red} />
                        <Line bg={COLORS.red} />
                      </>
                    ) : (
                      <Line />
                    )}
                  </TimeBox>
                  <SmallScore>8 or more</SmallScore>
                  <ScoreDesc>Critical</ScoreDesc>
                </Grid>
              </Grid>

              <InfoBox>
                <Image src={infoSquare} alt="Info" />
                <span onClick={handleOpen}>Learn more</span>
              </InfoBox>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <ModalContainer>
                  <ModalTitle>
                    <div>
                      <h2>Scores</h2>
                    </div>
                    <CloseButton onClick={handleClose}>
                      <Image src={close} alt="close" />
                    </CloseButton>
                  </ModalTitle>

                  <FactsContainer>
                    <Percent color={COLORS.green}>0-2</Percent>
                    <Fact>
                      <p>
                        Indicates normal cortisol levels within the healthy
                        range.
                      </p>
                    </Fact>
                  </FactsContainer>
                  <FactsContainer>
                    <Percent color={COLORS.yellow}>3-7</Percent>
                    <Fact>
                      <p>
                        Suggests cortisol levels are above the normal range but
                        not at critical levels.
                      </p>
                    </Fact>
                  </FactsContainer>
                  <FactsContainer>
                    <Percent color={COLORS.red}>8+</Percent>
                    <Fact>
                      <p>
                        Signifies that cortisol levels are significantly high
                        and may require immediate attention.
                      </p>
                    </Fact>
                  </FactsContainer>
                </ModalContainer>
              </Modal>
            </ResultsContent>
          </ResultsBox>
        </ResultsContainer> */}
      </SmallContainer>
      <SmallContainer>
        <div className="bg-white p-5 rounded-lg mb-5">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <span className="bg-red-300 py-1 px-3 rounded mb-5 block font-semibold">
                Now
              </span>
              <span className="font-semibold block mb-3">Energy levels</span>
              {risk === "high" && (
                <Level positive={false} color="bg-red-300" filled={1} />
              )}
              {risk === "elevated" && (
                <Level positive={false} color="bg-red-300" filled={2} />
              )}
              {risk === "balanced" && (
                <Level positive={false} color="bg-orange-300" filled={2} />
              )}

              <span className="font-semibold mb-3 block mt-5">Cortisol</span>

              {risk === "high" && (
                <Level positive={false} color="bg-red-300" filled={4} />
              )}
              {risk === "elevated" && (
                <Level positive={false} color="bg-red-300" filled={3} />
              )}
              {risk === "balanced" && (
                <Level positive={true} color="bg-green-300" filled={2} />
              )}
              {/* <Level positive={false} color="bg-red-300" filled={4} /> */}
              <span className="font-semibold mb-3 block mt-5">Metabolism</span>
              <Level positive={false} color="bg-red-300" filled={1} />
              <span className="font-semibold mb-3 block mt-5">Stress</span>
              <Level positive={false} color="bg-red-300" filled={3} />
            </div>
            <div className="col-span-6">
              <span className="bg-green-400 py-1 px-3 rounded block font-semibold mb-5 text-white">
                Your goal
              </span>
              <span className="font-semibold mb-3 block">Energy levels</span>
              <Level positive={true} color="bg-green-300" filled={4} />
              <span className="font-semibold mb-3 block mt-5">Cortisol</span>
              <Level positive={true} color="bg-red-300" filled={1} />
              <span className="font-semibold mb-3 block mt-5">Metabolism</span>
              <Level positive={true} color="bg-red-300" filled={3} />
              <span className="font-semibold mb-3 block mt-5">Stress</span>
              <Level positive={true} color="bg-red-300" filled={1} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl my-10 leading-2">
            Ready to Feel Your Best? Join the 14-Day Cortisol Challenge –
            <strong> Simple Steps, BIG Changes</strong>!
          </h1>
        </div>

        <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-10 mb-10">
          <div className="flex items-center justify-center">
            <Button onClick={() => handleJoin()}>Join now!</Button>
          </div>
        </div>
        {/* <Image src={beforeafter} alt="profile" width={600} /> */}

        {/* <div className="bg-white p-5 rounded-lg mt-5 mb-5">
          <p className="mb-2">
            {" "}
            This is a complex problem, so it requires a thoughtful, well-rounded
            solution. If you're looking to make lasting changes without
            completely overhauling your life, I think you'd really benefit from
            our <strong>free 14-day challenge</strong>.{" "}
          </p>
          <p>
            Each day, you’ll get simple tips that address different aspects of
            the problem, helping you make minor tweaks to your routine for
            long-term results. It's easy to follow and, best of all, it's free!
          </p>
        </div>
        <h1 className="text-3xl mb-3 font-semibold leading-2">
          14-Days Cortisol Reduction Challenge
        </h1>
        <div>
          <Image src={join} alt="join" width="500px" />
        </div> */}
        {/* <DidYouKnow /> */}
        <Offer />
        {/* <p>
        There is growing research that suggests a potential link between gut microflora (the collection of microorganisms in the gastrointestinal tract) and autism spectrum disorder (ASD). This area of study is part of a larger field often referred to as the gut-brain axis, which explores how the gut and brain communicate with each other through neural, hormonal, and immune pathways.
        </p> */}
        {/* <Product /> */}
        {/* <Book /> */}
      </SmallContainer>
      {/* <Reviews /> */}
      {/* <CheckoutContainer>
        <SmallContainer>
          <Checkout />
        </SmallContainer>
      </CheckoutContainer> */}
      {/* <Love /> */}
      {/* <ReviewsWithImage />
      <How />
      <Oto /> */}
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
