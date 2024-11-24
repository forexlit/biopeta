import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/colors";
import { sizes } from "@/styles/breakpoints";
import { FONTS } from "@/styles/fonts";
export const Heading = ({ title }) => {
  return <HeadingItem>{title}</HeadingItem>;
};
export const HeadingContainer = styled.div``;
export const Separator = styled.div`
  width: 70px;
  height: 4px;
  background: ${COLORS.secondary};
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const HeadingItem = styled.h2`
  text-align: center;
  font-family: ${FONTS.primary};
  font-size: 40px;
  max-width: 50%;
  line-height: 1.2;
  padding-bottom: 50px;
  margin: 0 auto;
  @media (max-width: ${sizes.sm}) {
    max-width: 100%;
    padding-bottom: 50px;
    font-size: 32px;
  }
`;
