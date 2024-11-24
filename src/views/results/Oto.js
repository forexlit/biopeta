import { SmallContainer } from "@/components/SmallContainer";
import React from "react";
import styled from "styled-components";
import { Timer } from "@/components/Timer";
import { Button } from "@/components/Button";
import Image from "next/image";
import { FONTS } from "@/styles/fonts";
import { useRouter } from "next/router";
import { AFF_URL } from "@/utils/settings";
export const Oto = () => {
  const router = useRouter();
  const viewOffer = () => {
    router.push(AFF_URL);
  };
  return (
    <OtoContainer>
      <SmallContainer>
        <OneTime>
          <h2>One-time offer!</h2>
          <Timer margin="20px 0px" />
          <Button onClick={viewOffer} full>
            View offer
          </Button>
        </OneTime>
      </SmallContainer>
    </OtoContainer>
  );
};

export const OtoContainer = styled.div`
  text-align: center;
  h2 {
    text-align: center;
    padding-bottom: 50px;
    font-size: 40px;
    font-family: ${FONTS.primary};
  }
  padding: 80px 0px;
`;

export const OneTime = styled.div`
  img {
    max-width: 100%;
    text-align: center;
  }
`;
