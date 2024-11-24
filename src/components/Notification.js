import { COLORS } from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ex from "../assets/icons/ex.svg";
export const Notification = () => {
  return (
    <>
      <NotificationContainer>
        <NotificationTitle>
          <Icon>
            <Image src={ex} width={30} heigh={30} alt="Ex" />
          </Icon>
          <Content>
            <h3>Important notice!</h3>
          </Content>
          <Close></Close>
        </NotificationTitle>
        <p>
          Your score <strong>94%</strong> indicates a strong correlation with
          low endocannabinoid levels, which causes symptoms very similar to ASD
          (Autism Spectrum Disorder).
        </p>
        <p>
          Children with restored endocannabinoid levels show{" "}
          <strong>more social interest (85%)</strong>, experience better
          concentration (74%), fall asleep faster (71%), increased willingness
          to try different foods (64%) *
        </p>
        <span>
          <strong>*</strong> Based on survery conducted in 23/05/2023
        </span>
      </NotificationContainer>
    </>
  );
};

export const NotificationContainer = styled.div`
  border: 2px solid #f4e3bd;
  border-radius: 10px;
  padding: 25px;
  background: #fff9eb;
  margin: 20px 0px;
  span {
    display: block;
    margin-top: 20px;
    font-size: 12px;
    font-weight: 300;
    color: #727272;
  }
  p {
    font-weight: 300;
    color: ${COLORS.black};
    line-height: 1.5;
    padding-top: 10px;
    font-size: 15px;
  }
`;
export const NotificationTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background: ${COLORS.secondary};
  padding: 10px;
  border-radius: 50%;
`;
export const Content = styled.div`
  padding-left: 20px;
  h3 {
    color: ${COLORS.black};
  }
`;
export const Close = styled.div``;
