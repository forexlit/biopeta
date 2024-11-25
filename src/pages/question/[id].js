import React, { useState, useContext, useCallback, useTransition } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Cookies from "js-cookie";
import { Progress } from "@/components/Progress";
import { SmallContainer } from "@/components/SmallContainer";
import { QUESTIONS } from "@/content/questions";
import MyContext from "@/context/MyContext";
import arrow from "../../assets/icons/next.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import logo from "../../assets/logo/logo2.png";
import Head from "next/head";
import { COLORS } from "@/styles/colors";
import checkedImg from "../../assets/icons/check-white.svg";
import { Button } from "@/components/Button";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const idInt = parseInt(id);
  const total = QUESTIONS.length;
  const question = QUESTIONS[idInt - 1];

  const goBack = () => {
    router.back();
  };

  const toggleAnswer = (answerValue) => {
    if (question.multiple) {
      // Handle multi-select
      setSelectedAnswers((prev) => {
        if (prev.includes(answerValue)) {
          return prev.filter((item) => item !== answerValue);
        } else {
          return [...prev, answerValue];
        }
      });
    } else {
      // Handle single-select
      setSelectedAnswers([answerValue]);
      handleNextQuestionClick([answerValue]); // Pass value directly
    }

    // ADD GENDER TO STORAGE
    if (idInt === 4) {
      Cookies.set("shedding", answerValue, {
        expires: 7, // Cookie will expire in 7 days
        path: "/", // Make the cookie available across the entire site
      });
    }
  };

  const handleNextQuestionClick = () => {
    setSelectedAnswers([]);
    const nextId = idInt + 1;
    if (nextId <= total) {
      router.push(`/question/${nextId}`);
    } else {
      router.push("/loading");
    }
  };

  if (!question) return <div>Loading...</div>;

  const { label, example, options, picture, multiple } = question;

  return (
    <>
      <Head>
        <title>Biopeta.com - Questions</title>
        <meta name="description" content="Questions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-[#ebfaff] min-h-[100vh]">
        <div className="flex items-center justify-between p-5">
          <div className="flex cursor-pointer items-center" onClick={goBack}>
            <Image src={arrowLeft} alt="Get back" />
            <span className="block ml-2">Back</span>
          </div>
          <div>
            <Image src={logo} width={132} height={30} alt="Cortiway" />
          </div>
          <div>
            <strong>{id}</strong> / {total}
          </div>
        </div>
        <SmallContainer>
          <QuizContainer>
            <Progress current={id} total={total} />
            {/* {picture && (
              <div className="flex items-center justify-center my-5">
                <Image
                  src={`/icons/quiz/${picture}`}
                  alt="Question Image"
                  width={50}
                  height={50}
                  priority
                />
              </div>
            )} */}
            <h1 className="text-2xl md:text-3xl mb-2 md:mb-0">{label}</h1>
            {example && <h3>{example}</h3>}
            {options &&
              options.map((option) => (
                <div
                  key={option.value}
                  id={option.value}
                  onClick={() => toggleAnswer(option.value)}
                  className={`flex items-center justify-between p-5 border border-gray-200  mb-2 rounded-lg cursor-pointer text-lg text-left ${
                    selectedAnswers.includes(option.value)
                      ? "bg-yellow-100"
                      : "bg-white"
                  }`}
                >
                  {option.icon && (
                    <div className="flex items-center">
                      <Image
                        src={`/icons/${option.icon}`}
                        alt="Icon"
                        width={30}
                        height={30}
                        className="mr-5"
                      />
                      {option.label}
                    </div>
                  )}
                  {!option.icon && option.label}
                  {!multiple && <Image src={arrow} alt="Arrow Yes Next" />}

                  {multiple && (
                    <div
                      className={` border w-6 h-6 rounded flex items-center justify-center ${
                        selectedAnswers.includes(option.value)
                          ? "bg-black border-black"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedAnswers.includes(option.value) && (
                        <Image src={checkedImg} alt="checked" height={12} />
                      )}
                    </div>
                  )}
                </div>
              ))}
            {multiple && (
              <div className="mt-5">
                <Button
                  onClick={handleNextQuestionClick}
                  className="mb-[100px]"
                  full
                  disabled={selectedAnswers.length === 0}
                >
                  Next
                </Button>
              </div>
            )}
          </QuizContainer>
        </SmallContainer>
      </div>
    </>
  );
}

const QuizContainer = styled.div`
  text-align: center;
  margin: 50px 0px;
  @media (max-width: 640px) {
    margin-top: 0;
  }
  margin-bottom: 150px;
  color: ${COLORS.black};
  h1 {
    font-weight: 600;
    padding-bottom: 20px;
    line-height: 1.2;
  }
  h3 {
    font-size: 18px;
    font-weight: 300;
    padding-bottom: 30px;
    line-height: 1.5;
  }
`;
