import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../assets/icons/logo.svg";

import { SmallContainer } from "@/components/SmallContainer";
import { FONTS } from "@/styles/fonts";
import { COLORS } from "@/styles/colors";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { AFF_URL } from "@/utils/settings";
import Cookies from "js-cookie";
import { gtag_report_conversion } from "../../components/Google";
import { sizes } from "@/styles/breakpoints";

export default function Notice() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const negativeAdultQuestionsString = Cookies.get("negativeAdultQuestions");
    const negativeAdultQuestions = JSON.parse(negativeAdultQuestionsString);
    setQuestionList(negativeAdultQuestions);
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
          Your following answers show a
          <mark>
            <strong>91% correlation</strong> with symptoms of low
            endocannabinoid levels
          </mark>
          , which can cause symptoms very similar to those of Autism Spectrum
          Disorder (ASD).
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
          After analyzing your responses,{" "}
          <mark>
            it appears that you may be experiencing issues with
            <strong> sleep, anxiety, pain, focus</strong>.
          </mark>
          These problems are often associated with low levels of
          endocannabinoids in your body. The endocannabinoid system plays a
          crucial role in regulating vital bodily functions such as memory,
          emotions, sleep, pain management, as well as inflammatory and immune
          responses.
        </p>

        <p>
          To restore your endocannabinoid system, you can eat more
          endocannabinoid-reinforcing foods, such as:
          <strong>hemp seeds & oil, chia seeds, wallnuts </strong>. However, to
          feel any effects you need to eat huge amounts of these products. The
          easier and more effective way would be to take
          <strong> natural CBD products</strong> which gives faster results due
          to it's concentration.
        </p>

        <p>
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
  /* border: 1px solid #e8e8e8; */
  border-radius: 5px;
  text-align: left;
  margin: 20px 0px;
  h4 {
    padding: 20px;
  }
  ul {
    list-style: none;
    li {
      border: 1px solid #e8e8e8;
      display: flex;
      align-items: center;
      padding: 10px;
      font-weight: 300;
      margin-bottom: 10px;
      background: #fff;
      border-radius: 10px;
      font-size: 15px;

      span {
        background: #ff3234;
        color: #fff;
        font-weight: 300;
        font-size: 12px;
        border-radius: 10px;
        padding: 10px;
        margin-right: 20px;
        display: block;
        max-width: 80px;
        text-align: center;
        min-width: 80px;
        font-weight: bold;
      }
    }
  }
`;
