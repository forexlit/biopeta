import { COLORS } from "@/styles/colors";
import React from "react";
import styled from "styled-components";

export const LoadingBar = ({ bgColor }) => {
  return (
    <LoadingBarContainer>
      <LoadingLine bgColor={bgColor}></LoadingLine>
    </LoadingBarContainer>
  );
};

export const LoadingBarContainer = styled.div`
  overflow: hidden;
  background: #ddd;
  border-radius: 5px;
`;
export const LoadingLine = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 0px;
  height: 5px;
  border-radius: 15px;
  animation: progres 4s infinite linear;
  animation-iteration-count: 1;
  border-radius: 5px;
  @keyframes progres {
    0% {
      width: 0%;
    }
    25% {
      width: 50%;
    }
    50% {
      width: 75%;
    }
    75% {
      width: 85%;
    }
    100% {
      width: 100%;
    }
  }
`;
