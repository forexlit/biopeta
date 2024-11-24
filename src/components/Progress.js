import { COLORS } from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import { sizes } from "@/styles/breakpoints";

export const Progress = ({ current, total }) => {
  let progress = (current / total) * 100;

  return (
    <BarContainer>
      <BarProgress length={progress}></BarProgress>
    </BarContainer>
  );
};

export const BarContainer = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 20px;
  background: #e1e9ef;
  margin-top: 20px;
  margin-bottom: 50px;
  @media (max-width: ${sizes.sm}) {
    margin-top: 0;
    margin-bottom: 25px;
  }
`;
export const BarProgress = styled.div`
  border-radius: 20px;
  width: ${(props) => props.length}%;
  height: 5px;
  background: ${COLORS.secondary};
`;
