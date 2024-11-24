import { COLORS } from "@/styles/colors";
import { FONTS } from "@/styles/fonts";
import React from "react";
import styled from "styled-components";
import stars from "../../assets/icons/rating.svg";
import Image from "next/image";
import book from "../../assets/images/book/h1.png";
import { Collapse } from "@/components/Collapse";
import { sizes } from "@/styles/breakpoints";
import communication from "../../assets/icons/talk.svg";
import behav from "../../assets/icons/behav.svg";
import future from "../../assets/icons/future.svg";
import rep from "../../assets/icons/rep.svg";
import { Checkout } from "../checkout";
import checkmark from "../../assets/icons/check.svg";

export const Book = () => {
  return (
    <BookContainer>
      <h1>
        How to reduce your child's autistic symptoms to a point that it's almost
        invisible?
      </h1>
      <BookTitle>
        <p>
          Packed with valuable insights and practical strategies, this guide
          equips you with the tools needed to help your child overcome these
          challenges and reach their full potential.
        </p>
      </BookTitle>

      <Ratings>
        <div>
          <span>Bestseller</span>
        </div>
        <Rating>
          <strong>4.9</strong>
          <Image src={stars} alt="stars" />
          (712 ratings)
        </Rating>
      </Ratings>
      <BookImage>
        <Image src={book} alt="Book" />
      </BookImage>

      <h1>What's inside the book?</h1>
      <CollapseBox>
        <Collapse
          title="Chapter 1: Understanding Autism Spectrum Disorder (ASD)"
          expanded={true}
          icon={communication}
        >
          <ul>
            <li>
              <Image src={checkmark} alt="checkmark" />
              What is Autism Spectrum Disorder?
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Types and Diagnosis of ASD
            </li>
          </ul>
        </Collapse>
        <Collapse
          title="Chapter 2: Communication and Language Delays"
          expanded={true}
          icon={communication}
        >
          <ul>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Identifying Communication and Language Delays
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />7 Strategies to Promote
              Language Development
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Augmentative and Alternative Communication (AAC) Strategies
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Case Study: Encouraging Communication through Visual Supports
            </li>
          </ul>
        </Collapse>
        <Collapse title="Chapter 3: Social Interaction Difficulties" icon={rep}>
          <ul>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Recognizing Social Interaction Challenges
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Strategies for Building Social Skills and Understanding
            </li>
          </ul>
        </Collapse>
        <Collapse title="Chapter 4: Restricted and Repetitive Behaviors">
          <ul>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Understanding Restricted and Repetitive Behaviors
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Managing Sensory Sensitivities
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Addressing Obsessive Interests
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Managing Meltdowns and Self-Stimulatory Behaviors
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Applied Behavior Analysis (ABA) and Positive Behavior Support
              (PBS)
            </li>
          </ul>
        </Collapse>
        <Collapse title="Chapter 5: Nurturing a Bright Future" icon={behav}>
          <ul>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Education and Individualized Learning Plans
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Building Independence and Life Skills
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Preparing for Post-Secondary Education
            </li>
            <li>
              <Image src={checkmark} alt="checkmark" />
              Transitioning to Adulthood
            </li>
          </ul>
        </Collapse>
      </CollapseBox>

      <Checkout />
    </BookContainer>
  );
};

export const BookContainer = styled.div`
  margin-top: 10px;
  padding-bottom: 50px;

  h1 {
    font-family: ${FONTS.primary};
    line-height: 1.2;
    padding: 20px 0px;
    @media (max-width: ${sizes.md}) {
      padding-top: 0;
      text-align: center;
    }
  }
`;

export const BookTitle = styled.div`
  p {
    font-weight: 300;
    margin: 20px 0px;
    line-height: 1.5;
    margin-top: 0;
  }
  @media (max-width: ${sizes.md}) {
    text-align: center;
  }
`;

export const Ratings = styled.div`
  display: flex;
  align-items: center;
  span {
    display: block;
    background: ${COLORS.secondary};

    padding: 5px 20px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 13px;
  }
`;

export const Rating = styled.div`
  display: flex;
  margin-left: 10px;
  img {
    margin: 0px 10px;
  }
  font-weight: 300;
  font-size: 13px;
  text-decoration: underline;
  strong {
    text-decoration: none !important;
  }
`;
export const CollapseBox = styled.div`
  margin: 20px 0px;
`;

export const BookImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 20px 0px;
  }
`;
