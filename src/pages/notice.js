import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../assets/icons/logo.svg";
import { SmallContainer } from "@/components/SmallContainer";
import { FONTS } from "@/styles/fonts";
import { Timer } from "@/components/Timer";
import { COLORS } from "@/styles/colors";
import arrow from "../assets/icons/next.svg";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { AFF_URL } from "@/utils/settings";
import Cookies from "js-cookie";
import { gtag_report_conversion } from "../components/Google";
import { sizes } from "@/styles/breakpoints";

export default function Notice() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const negativeQuestionsString = Cookies.get("negativeQuestions");
    const negativeQuestions = JSON.parse(negativeQuestionsString);
    setQuestionList(negativeQuestions);
  }, []);

  const router = useRouter();

  const handleOfferClick = () => {
    window.open(AFF_URL, "_blank");
    gtag_report_conversion(AFF_URL);
  };
  const handleLoading = () => {
    router.push("/loading");
  };

  return (
    <SmallContainer>
      <LogoContainer>
        <Image src={logo} width={152} height={30} alt="logo" />
      </LogoContainer>
      <NoticeContainer>
        <h1>Important Notice!</h1>
        <p>
          Your following responses might indicate
          <mark>
            endocannabinoid deficiency, which shares similar characteristics
            with Autism Spectrum Disorder (ASD) or Asperger's:
          </mark>
        </p>
        <QuestionsContainer>
          {/* <h4>These indicate endocannabinoid deficiency:</h4> */}
          <ul>
            {questionList &&
              questionList.map((question, index) => {
                return (
                  <li key={index}>
                    <span>{question.answer}</span>
                    {question.question}
                  </li>
                );
              })}
          </ul>
        </QuestionsContainer>
        <p>
          <mark>
            The endocannabinoid system regulates and controls many of the most
            critical bodily functions in your child.
          </mark>
          Such as learning and memory, emotional processing, sleep, pain
          control, inflammatory and immune responses. 
        </p>

        <p>
          One of the most effective ways to ensure a healthy endocannabinoid
          system is by taking CBD.
          <mark>
            Mothers from our community found that giving CBD to their children
            significally reduced symptoms of ASD, anxiety and fixed sleep
            issues.
          </mark>
          CBD is a 100% natural compound that is safe for children of all ages
          and non-habit forming. What is most important is that we found CBD in
          the form of gummies, which kids love due to their appealing shape and
          taste!
        </p>
      </NoticeContainer>
      {/* <Timer /> */}
      <ButtonContainer>
        <Button onClick={handleOfferClick} id="view_offer">
          View Offer
        </Button>
        <Button onClick={handleLoading} bg="#fff" border={true}>
          Get Screener Results
        </Button>
      </ButtonContainer>
    </SmallContainer>
  );
}

export const NoticeContainer = styled.div`
  text-align: center;
  h1 {
    font-family: ${FONTS.primary};

    padding: 20px 0px;
    @media (max-width: ${sizes.sm}) {
      padding: 0;
    }
  }
  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.8;
    padding: 15px 0px;
    color: ${COLORS.black};
  }
  mark {
    background-color: #f0de97;
    color: black;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
  }
`;
export const LogoContainer = styled.div`
  text-align: center;
  padding: 10px 0px;
`;
export const AnswerButton = styled.div`
  width: 100%;
  padding: 25px;
  font-size: 18px;
  border-radius: 5px;
  color: ${COLORS.black};
  background: #fff;
  margin-bottom: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(0px 5px 15px rgba(0, 9, 55, 0.05));
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  button {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const QuestionsContainer = styled.div`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  text-align: left;
  margin: 20px 0px;
  h4 {
    padding: 20px;
  }
  ul {
    list-style: none;
    li {
      display: flex;
      align-items: center;
      padding: 20px;
      font-weight: 300;
      :not(:last-child) {
        border-bottom: 1px solid #e8e8e8;
      }
      span {
        background: #ff3234;
        color: #fff;
        font-weight: 300;
        font-size: 12px;
        border-radius: 10px;
        padding: 10px 20px;
        margin-right: 20px;
        display: block;
        max-width: 60px;
        text-align: center;
      }
    }
  }
`;
