import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../assets/icons/cortiway2.png";
import { SmallContainer } from "@/components/SmallContainer";
import { FONTS } from "@/styles/fonts";
import { COLORS } from "@/styles/colors";
import { sizes } from "@/styles/breakpoints";
import { Button } from "@/components/Button";
import Router from "next/router";
import delivery from "../assets/icons/shipping.svg";

export default function Success() {
  const download = () => {
    Router.push("http://download.Cortiway.com/From_Overload_to_Balance.pdf");
  };
  return (
    <SmallContainer>
      <div className="flex items-center justify-center">
        <Image src={logo} width={152} height={30} alt="logo" />
      </div>
      <div className="mt-[100px]">
        <h1 className="text-2xl font-semibold text-center mb-10">
          🎉 Order Confirmed!
        </h1>
        <p className="text-green-700">
          Thank you for your purchase! Your order was successful, and we're
          excited to have you on board. Expect your product to arrive soon, and
          get ready to experience the benefits!
        </p>

        <div className="flex items-center justify-center mb-3">
          <Image
            src={delivery}
            width={25}
            height={25}
            alt="Delivery"
            className="my-5 mr-3"
          />
          <span className="pr-1">Your order will be delivered in </span>{" "}
          <strong> 3-5 business days</strong>.
        </div>
        <span>
          If you have any questions, feel free to contact us:{" "}
          <span className="underline">info@cortiway.com</span>
        </span>
      </div>
    </SmallContainer>
  );
}

export const NoticeContainer = styled.div`
  text-align: center;
  h1 {
    font-family: ${FONTS.primary};
    color: green;
    padding: 20px 0px;
    margin-top: 50px;
    @media (max-width: ${sizes.sm}) {
      padding: 0;
    }
  }
  p {
    font-size: 17px; 5 6
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

export const ButtonBox = styled.div`
  padding: 30px 0px;
`;
