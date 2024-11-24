import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../../assets/icons/logo.svg";
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import arrow from "../../../assets/icons/next.svg";
import { Progress } from "../../../components/Progress";
import { SmallContainer } from "../../../components/SmallContainer";
import { ADULT_QUESTIONS } from "../../../content/adultQuestions";
import MyContext from "../../../context/MyContext";
import { COLORS } from "../../../styles/colors";
import { FONTS } from "../../../styles/fonts";

import { sizes } from "@/styles/breakpoints";
import Cookies from "js-cookie";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const { finalAdultScore, setFinalAdultScore } = useContext(MyContext);
  const [negativeAdultQuestions, setNegativeAdultQuestions] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const total = ADULT_QUESTIONS.length;
  const question = ADULT_QUESTIONS[parseInt(id) - 1];

  const goBack = () => {
    router.back();
  };

  const handleNextQuestionClick = (e) => {
    const answer = e.target.id;
    const nextId = parseInt(id) + 1;

    console.log(answer);

    const selectedOption = question.options.find(
      (option) => option.value === answer
    );
    const points = selectedOption.points;

    if (points > 0) {
      const questionObject = {
        question: question.label,
        impact: question.impact ? question.impact : "",
        answer: answer,
        meaning: "negative",
      };
      setNegativeAdultQuestions([...negativeAdultQuestions, questionObject]);

      Cookies.set(
        "negativeAdultQuestions",
        JSON.stringify(negativeAdultQuestions)
      );
    }

    setFinalAdultScore(finalAdultScore + points);
    Cookies.set("finalAdultScoreCookie", finalAdultScore + points);

    if (nextId <= total) {
      router.push(`/adult/question/${nextId}`);
    }
    if (nextId - 1 === total) {
      router.push("/adult/notice");
    }
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  const { label, example } = question;

  return (
    <QuizPage>
      <TopNavigation>
        <Back onClick={goBack}>
          <Image src={arrowLeft} alt="Get back" />
          <span>Back</span>
        </Back>
        <div>
          <Image src={logo} width={152} height={30} alt="Autism Outreach" />
        </div>
        <div>
          {id} / {total}
        </div>
      </TopNavigation>
      <SmallContainer>
        <QuizContainer>
          <Progress current={id} total={total} />
          <h1>{label}</h1>
          <h3>{finalAdultScore}</h3>
          {example && <h3>{example}</h3>}
          {ADULT_QUESTIONS[id - 1].options.map((single, index) => {
            return (
              <AnswerButton
                id={single.label}
                key={index}
                onClick={handleNextQuestionClick}
              >
                {single ? single.label : <h1>Nera</h1>}
                <Image src={arrow} alt="Arrow Next" />
              </AnswerButton>
            );
          })}
        </QuizContainer>
      </SmallContainer>
    </QuizPage>
  );
}

export const QuizContainer = styled.div`
  text-align: center;
  margin: 50px 0px;
  @media (max-width: ${sizes.sm}) {
    margin-top: 0;
  }
  margin-bottom: 150px;
  color: ${COLORS.black};
  h1 {
    font-weight: 600;
    padding-top: 30px;
    padding-bottom: 20px;
    font-family: ${FONTS.primary};
    color: ${COLORS.black};
    line-height: 1.2;
  }
  h3 {
    font-size: 18px;
    font-weight: 300;
    padding-bottom: 30px;
    color: ${COLORS.black};
    line-height: 1.5;
  }
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
  :active {
    background: #f6bb05;
  }
`;

export const QuizPage = styled.div``;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 30px 0px;
  align-items: center;
`;
export const Back = styled.div`
  cursor: pointer;
  img {
    margin-right: 10px;
  }
  span {
    color: ${COLORS.black};
    font-weight: 500;
  }
`;
