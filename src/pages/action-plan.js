import React, { useState, useEffect } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import { TopNavigation } from "@/components/TopNavigation";
import { Footer } from "@/views/Footer";
import { SmallContainer } from "@/components/SmallContainer";
import styled from "styled-components";
import { COLORS } from "../styles/colors";
import { FONTS } from "../styles/fonts";
import Image from "next/image";
import emailIcon from "../assets/icons/email.svg";

export default function ActionPlan() {
  const [finalScore, setFinalScore] = useState(null);
  useEffect(() => {
    const finalScoreCookies = Cookies.get("finalScoreCookie");
    setFinalScore(finalScoreCookies);
  }, []);

  return (
    <>
      <Head>
        <title>Cortiway.com - Your Action Plan </title>
        <meta name="description" content="Autism Outreach Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopNavigation />
      <SmallContainer>
        <ResultsContainer>
          <h1>Personlized Action Plan</h1>
          <h3>
            Our action plan is based on your score from our screening tool. We
            will deliver this action plan to your email, ensuring you have it
            readily available whenever you need it. Remember, an action plan is
            only valuable when put into action, so make sure to utilize it and
            follow the recommended steps to make the most of it.
          </h3>
        </ResultsContainer>
        <ActionsContainer>
          <ActionPlanBox>
            <h2>Week 1: Preparation and resources</h2>
            <ul>
              <li>
                <div>
                  <Image src={emailIcon} alt="email" />
                </div>{" "}
                <h4>
                  Day 1: Preparation + free resources{" "}
                  <span>(you will receive an email shortly)</span>
                </h4>
              </li>
              {/* <li>
              <h4>Day 2: Most common problems and how to work on them</h4>
            </li>
            <li>
              <h4>Day 3: The importance of nutrition</h4>
            </li>
            <li>
              <h4>Day 4: Tracking progress + tips</h4>
            </li> */}
            </ul>
          </ActionPlanBox>
          <ActionPlanBox>
            <h2>Week 2: Developmental delay, Autism, ADHD</h2>
          </ActionPlanBox>
          <ActionPlanBox>
            <h2>Week 3: Nutrition deficiencies</h2>
          </ActionPlanBox>
          <ActionPlanBox>
            <h2>Week 4: Progress tracking & tips</h2>
          </ActionPlanBox>
        </ActionsContainer>
      </SmallContainer>
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
    line-height: 1.5;
  }
`;

export const ActionPlanBox = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  span {
    font-size: 13px;
    font-weight: 300;
  }
  h2 {
    font-family: ${FONTS.primary};
  }
  h4 {
    font-weight: 400;
  }
  margin-bottom: 20px;
  ul {
    list-style: none;
    padding: 20px 0px;
    li {
      border: 1px solid #eef5fa;
      padding: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;

      }
    }
    img {
      margin-right: 10px;
    }
  }
`;

export const ActionsContainer = styled.div`
  margin-bottom: 100px;
`;
