import { SmallContainer } from "@/components/SmallContainer";
import React from "react";
import styled from "styled-components";

import { Timer } from "@/components/Timer";
import { Button } from "@/components/Button";
import Image from "next/image";
import { FONTS } from "@/styles/fonts";
import { useRouter } from "next/router";
import { AFF_URL } from "@/utils/settings";
import check from "../assets/icons/check.svg";

export const Love = () => {
  const router = useRouter();
  const viewOffer = () => {
    router.push(AFF_URL);
  };
  return (
    <OtoContainer>
      <SmallContainer>
        <OneTime>
          <h2>You will love this book if you want to...</h2>
        </OneTime>
        <ListContainer>
          <ul>
            <li>
              <Image src={check} width={20} height={20} alt="Check" />
              Help your child overcome communication and language delays
            </li>
            <li>
              <Image src={check} width={20} height={20} alt="Check" />
              Learn effective strategies to address and manage restricted and
              repetitive behaviors
            </li>
            <li>
              <Image src={check} width={20} height={20} alt="Check" />
              Improve your child's social interaction difficulties
            </li>
            <li>
              <Image src={check} width={20} height={20} alt="Check" />
              Successfully tackle behavioral challenges
            </li>
            <li>
              <Image src={check} width={20} height={20} alt="Check" />
              Empower you to nurture a bright and promising future for your
              child
            </li>
          </ul>
        </ListContainer>
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

export const ListContainer = styled.div`
  text-align: left;
  ul {
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      margin-right: 5px;
    }
  }
`;
