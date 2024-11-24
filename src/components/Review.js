import React from "react";
import styled from "styled-components";
import Image from "next/image";
import stars from "../assets/icons/stars.svg";
import verified from "../assets/icons/verified.svg";
import { sizes } from "@/styles/breakpoints";
import { COLORS } from "@/styles/colors";

export const Review = ({ review }) => {
  const { title, content, name, picture, country } = review;
  return (
    <ReviewItem>
      <Customer>
        <Name>
          <Image src={picture} width={54} height={54} alt={name} />
          <div>
            <strong>{name}</strong>
            <span>{country}</span>
          </div>
        </Name>
        <VerifiedContainer>
          <Image src={verified} alt="Verified" /> <span>Verified</span>
        </VerifiedContainer>
      </Customer>
      <StarsContainer>
        <Image src={stars} alt="Rating" />
      </StarsContainer>

      <h3 className="font-semibold">{title}</h3>
      <p>{content}</p>
    </ReviewItem>
  );
};

export const ReviewItem = styled.div`
  color: ${COLORS.black};
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  min-height: 405px;
  filter: drop-shadow(0px 5px 15px rgba(0, 9, 55, 0.05));

  @media (max-width: ${sizes.sm}) {
    min-height: auto;
  }
  h3 {
    padding-top: 20px;
    font-size: 16px;
  }
  p {
    padding: 15px 0px;
    font-size: 16px;
    font-weight: regular;
    line-height: 1.5;
    opacity: 0.8;
  }
`;
export const Customer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const VerifiedContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
  }
  color: ${COLORS.black};
  font-size: 14px;
  font-weight: 300;
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 15px;
    border-radius: 50%;
  }
  strong {
    font-size: 14px;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
  }
  span {
    display: block;
    font-weight: 300;
    font-size: 14px;
  }
`;

export const StarsContainer = styled.div`
  padding-top: 30px;
`;
