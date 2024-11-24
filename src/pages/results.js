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

import { Timer } from "../components/Timer";
import { ReviewsWithImage } from "@/views/home/ReviesWithImage";
import { How } from "@/views/results/How";
import { Oto } from "@/views/results/Oto";

import arrowDown from "../assets/icons/arrow_down.svg";
import { Notification } from "@/components/Notification";
import { Product } from "@/views/results/Product";

export default function Results() {
  const [finalScore, setFinalScore] = useState(null);
  const [scoreColor, setScoreColor] = useState("");
  const [risk, setRisk] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const finalScoreCookies = Cookies.get("finalScoreCookie");
  const negativeQuestions = Cookies.get("negativeQuestions");
  const router = useRouter();

  useEffect(() => {
    if (finalScoreCookies) {
      setFinalScore(finalScoreCookies);
    }
    if (finalScoreCookies >= 8) {
      setRisk("high");
      setScoreColor(COLORS.red);
    } else if (finalScoreCookies >= 3) {
      setRisk("medium");
      setScoreColor(COLORS.yellow);
    } else {
      setRisk("low");
      setScoreColor(COLORS.green);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Cortiway.com - Your Calculated Score & Action Plan </title>
        <meta name="description" content="Autism Outreach Community" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YZD73N7T54"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-YZD73N7T54');
        gtag('event', 'conversion', {'send_to': 'AW-11157688895/6G8rCPu41qYYEL-ks8gp'});
      `,
          }}
        ></script>
      </Head>
      <TopNavigation />
      <SmallContainer>
        <ResultsContainer>
          {/* <h1 id="results">Results</h1> */}
          <ResultsBox>
            <ScoreContainer bg={scoreColor}>
              <h2>
                Your Risk: <span>{risk}</span>
              </h2>

              <ScoreBox color={scoreColor}>
                <h4>{finalScore ? finalScore : ""}</h4>
              </ScoreBox>
            </ScoreContainer>
            <ResultsContent>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <TimeBox>
                    {risk === "low" ? (
                      <>
                        <Risk>Low Risk</Risk>
                        <Bubble bg={COLORS.green} />
                        <Line bg={COLORS.green} />
                      </>
                    ) : (
                      <Line />
                    )}
                  </TimeBox>
                  <SmallScore>0-2</SmallScore>
                  <ScoreDesc>Low risk</ScoreDesc>
                </Grid>
                <Grid item xs={4}>
                  <TimeBox>
                    {risk === "medium" ? (
                      <>
                        <Risk>Medium Risk</Risk>
                        <Bubble bg={COLORS.yellow} />
                        <Line bg={COLORS.yellow} />
                      </>
                    ) : (
                      <Line />
                    )}
                  </TimeBox>
                  <SmallScore>3-7</SmallScore>
                  <ScoreDesc>Medium risk</ScoreDesc>
                </Grid>
                <Grid item xs={4}>
                  <TimeBox>
                    {risk === "high" ? (
                      <>
                        <Risk>High Risk</Risk>
                        <Bubble bg={COLORS.red} />
                        <Line bg={COLORS.red} />
                      </>
                    ) : (
                      <Line />
                    )}
                  </TimeBox>
                  <SmallScore>8 or more</SmallScore>
                  <ScoreDesc>High risk</ScoreDesc>
                </Grid>
              </Grid>
              {/* {risk === "low" && (
                <ScoreText color={scoreColor}>
                  <span>Low risk for ASD</span>
                  <p>
                    It's important to note that while autism is a complex
                    developmental disorder, some symptoms associated with autism
                    can also be seen in individuals with endocannabinoid
                    deficiency. <br />
                    <br />
                    The endocannabinoid system plays a crucial role in
                    regulating neurological functions. Deficiencies in this
                    system have been linked to issues such as anxiety, mood
                    disorders, hyperactivity and cognitive impairments, which
                    can manifest as symptoms similar to those seen in autism.
                    <br /> <br />
                    We recommend trying CBD gummies for a month to observe any
                    potential changes in your child's behavior. CBD is a
                    completely natural compound that is safe for children of all
                    ages. What's great is that it comes in a form and taste that
                    kids love!
                  </p>
                </ScoreText>
              )}
              {risk === "medium" && (
                <ScoreText color={scoreColor}>
                  <span>Medium risk for ASD</span>
                  <p>
                    It's important to note that while autism is a complex
                    developmental disorder, some symptoms associated with autism
                    can also be seen in individuals with endocannabinoid
                    deficiency. <br />
                    <br />
                    The endocannabinoid system plays a crucial role in
                    regulating neurological functions. Deficiencies in this
                    system have been linked to issues such as anxiety, mood
                    disorders, hyperactivity and cognitive impairments, which
                    can manifest as symptoms similar to those seen in autism.
                    <br /> <br />
                    We recommend trying CBD gummies for a month to observe any
                    potential changes in your child's behavior. CBD is a
                    completely natural compound that is safe for children of all
                    ages. What's great is that it comes in a form and taste that
                    kids love!
                  </p>
                </ScoreText>
              )}
              {risk === "high" && (
                <ScoreText color={scoreColor}>
                  <span>High risk for ASD</span>
                  <p>
                    It's important to note that while autism is a complex
                    developmental disorder, some symptoms associated with autism
                    can also be seen in individuals with endocannabinoid
                    deficiency. <br />
                    <br />
                    The endocannabinoid system plays a crucial role in
                    regulating neurological functions. Deficiencies in this
                    system have been linked to issues such as anxiety, mood
                    disorders, hyperactivity and cognitive impairments, which
                    can manifest as symptoms similar to those seen in autism.
                    <br /> <br />
                    We recommend trying CBD gummies for a month to observe any
                    potential changes in your child's behavior. CBD is a
                    completely natural compound that is safe for children of all
                    ages. What's great is that it comes in a form and taste that
                    kids love!
                  </p>
                </ScoreText>
              )} */}
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
                        Low risk for ASD. No further action is typically
                        necessary.
                      </p>
                    </Fact>
                  </FactsContainer>
                  <FactsContainer>
                    <Percent color={COLORS.yellow}>3-7</Percent>
                    <Fact>
                      <p>
                        Moderate risk for ASD. Further evaluation or monitoring
                        may be recommended.
                      </p>
                    </Fact>
                  </FactsContainer>
                  <FactsContainer>
                    <Percent color={COLORS.red}>8+</Percent>
                    <Fact>
                      <p>
                        High risk for ASD. Additional assessment and diagnostic
                        evaluation are typically recommended.
                      </p>
                    </Fact>
                  </FactsContainer>
                </ModalContainer>
              </Modal>
              {/* <Button onClick={viewOffer} primary full>
                View Offer
              </Button> */}
            </ResultsContent>
          </ResultsBox>
        </ResultsContainer>
      </SmallContainer>
      <SmallContainer>
        <ArrowBg>
          <Image src={arrowDown} width={40} height={40} />
        </ArrowBg>
        <Notification />
      </SmallContainer>

      <Container>
        <AfterResults>
          <Product />
        </AfterResults>
      </Container>

      <ReviewsWithImage />
      <How />
      <Oto />
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
