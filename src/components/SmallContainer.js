import React from "react";
import styled from "styled-components";

export const SmallContainer = ({ children }) => {
  return <SmallContainerBox>{children}</SmallContainerBox>;
};

export const SmallContainerBox = styled.div`
  padding: 20px;
  padding-top: 0px;
  width: 650px;
  max-width: 100%;
  margin: 0 auto;
`;
