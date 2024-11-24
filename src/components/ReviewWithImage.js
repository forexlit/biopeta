import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { sizes } from "@/styles/breakpoints";
import { COLORS } from "@/styles/colors";
import starYellow from "../assets/icons/star-yellow.svg";
import usa from "../assets/icons/usa.svg";

export const ReviewWithImage = ({ review }) => {
  const { title, content, pictureFull, name, picture, country } = review;
  return (
    <ReviewItem>
      <Customer>
        <ReviewImage>
          <Image
            src={pictureFull}
            style={{ borderRadius: "10px 10px 0px 0px", objectFit: "cover" }}
            fill
            alt="review"
          />
        </ReviewImage>
      </Customer>
      <ReviewText>
        <div>
          <div className="flex items-center mb-2">
            <Image src={starYellow} alt="star" height={20} width={20} />
            <Image src={starYellow} alt="star" height={20} width={20} />
            <Image src={starYellow} alt="star" height={20} width={20} />
            <Image src={starYellow} alt="star" height={20} width={20} />
            <Image src={starYellow} alt="star" height={20} width={20} />
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p>{content}</p>
          <VerifiedContainer>
            <Image src={usa} alt="USA" height={20} />{" "}
            <span>
              {name}, {country}
            </span>
          </VerifiedContainer>
        </div>
      </ReviewText>
    </ReviewItem>
  );
};

export const ReviewItem = styled.div`
  color: ${COLORS.black};
  background: #fff;
  /* padding: 30px; */
  border-radius: 5px;
  min-height: 405px;
  filter: drop-shadow(0px 5px 15px rgba(0, 9, 55, 0.05));
  background: #feefec;

  @media (max-width: ${sizes.sm}) {
    min-height: auto;
  }
  h3 {
    // font-size: 15px;
    color: ${COLORS.black};
    line-height: 1.5;
  }
  p {
    padding: 15px 0px;
    font-size: 15px;
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

export const ReviewImage = styled.div`
  height: 280px;
  position: relative;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;
export const ReviewText = styled.div`
  display: flex;
  padding: 20px;
`;
export const Bottle = styled.div`
  margin-top: -50px;
  z-index: 1;
  padding-right: 20px;
`;
