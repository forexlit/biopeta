import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SmallContainer } from "@/components/SmallContainer";
import { useRouter } from "next/router";
import Image from "next/image";
import { FONTS } from "../styles/fonts";
import { COLORS } from "@/styles/colors";
import checkWhite from "../assets/icons/check-white.svg";
import { TopNavigation } from "@/components/TopNavigation";
import { sizes } from "@/styles/breakpoints";
import Head from "next/head";
import loading from "../assets/images/loading.png";

export default function Loading() {
  const router = useRouter();
  const steps = [
    "Evaluating your answers...",
    "Identifying shedding triggers...",
    "Crafting personalized solution...",
    "Finalizing the perfect match...",
  ];

  const [currentStep, setCurrentStep] = useState(0); // Track the current step
  const [progress, setProgress] = useState(0); // Track progress for the current step
  const [completed, setCompleted] = useState(Array(steps.length).fill(false)); // Track completed steps

  useEffect(() => {
    if (currentStep < steps.length) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 5; // Increment progress
          } else {
            clearInterval(interval);
            setCompleted((prev) => {
              const updated = [...prev];
              updated[currentStep] = true;
              return updated;
            });
            setProgress(0); // Reset progress for the next step
            setCurrentStep((prevStep) => prevStep + 1); // Move to the next step
            return 100;
          }
        });
      }, 80); // Smooth progress increment

      return () => clearInterval(interval);
    } else {
      // Redirect after all steps are completed
      setTimeout(() => {
        router.push("/email");
      }, 400);
    }
  }, [currentStep, steps.length, router]);

  return (
    <>
      <Head>
        <title>Biopeta.com - Loading... </title>
        <meta name="description" content="Autism Outreach Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopNavigation />
      <SmallContainer>
        <LoadingContainer>
          <Image
            src={loading}
            alt="Loading"
            height={120}
            className="mx-auto mt-5"
          />
          <h1 className="text-2xl md:text-3xl">
            Generating Your Dog's Custom Anti-Shedding Solution...🐾
          </h1>
          <Actions>
            {steps.map((text, index) => (
              <ActionContainer key={index}>
                <ActionBox>
                  <div>
                    <span>{text}</span>
                  </div>
                  <div>
                    {index < currentStep
                      ? "100%"
                      : index === currentStep
                      ? `${progress}%`
                      : "0%"}
                  </div>
                </ActionBox>
                <LoadingBarWrapper>
                  <LoadingBar
                    style={{
                      width: `${
                        index < currentStep
                          ? 100
                          : index === currentStep
                          ? progress
                          : 0
                      }%`,
                      backgroundColor:
                        index < currentStep ? COLORS.green : COLORS.blue,
                      transition: "width 0.1s ease-in-out", // Smooth transition
                    }}
                  />
                </LoadingBarWrapper>
              </ActionContainer>
            ))}
          </Actions>
        </LoadingContainer>
        {/* <Checks>
          {steps.map((_, index) => (
            <Bubble key={index} bg={completed[index] ? "#22b522" : "#ddd"}>
              {completed[index] && <Image src={checkWhite} alt="Completed" />}
            </Bubble>
          ))}
        </Checks> */}
        <Checks>
          {steps.map((_, index) => (
            <Bubble
              key={index}
              bg={
                completed[index]
                  ? index === steps.length - 1
                    ? "red" // Last item completed -> red
                    : "#22b522" // Other completed items -> green
                  : "#ddd" // Incomplete items -> gray
              }
            >
              {completed[index] && <Image src={checkWhite} alt="Completed" />}
            </Bubble>
          ))}
        </Checks>
        <Note>Stay tuned! We're building your report.</Note>
      </SmallContainer>
    </>
  );
}

const LoadingBarWrapper = ({ children }) => (
  <div
    style={{
      width: "100%",
      height: "10px",
      backgroundColor: "#ddd",
      borderRadius: "5px",
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);

const LoadingBar = ({ style }) => (
  <div style={{ height: "100%", borderRadius: "5px", ...style }}></div>
);

export const LoadingContainer = styled.div`
  color: ${COLORS.black};
  text-align: center;
  h1 {
    padding: 30px 0px;
    font-weight: 600;
    line-height: 1.2;
    @media (max-width: ${sizes.sm}) {
      padding: 0px;
    }
  }
`;

export const Actions = styled.div`
  padding: 30px 0px;
`;
export const ActionContainer = styled.div`
  margin-bottom: 10px;
`;
export const ActionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  @media (max-width: ${sizes.sm}) {
    padding-bottom: 5px;
    padding-top: 10px;
  }

  span {
    color: ${COLORS.black};
    font-weight: semibold;
  }
`;

export const Checks = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Bubble = styled.div`
  background: ${(props) => props.bg};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`;
export const Note = styled.p`
  text-align: center;
  margin-top: 10px;
  font-weight: 300;
  color: ${COLORS.black};
`;
