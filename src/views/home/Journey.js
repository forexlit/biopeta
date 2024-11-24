import { Heading } from "@/components/Heading";
import { Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import wondering from "../../assets/icons/wondering.svg";
import diagnosed from "../../assets/icons/diagnosed.svg";
import living from "../../assets/icons/living.svg";
import { Button } from "@/components/Button";
import { sizes } from "@/styles/breakpoints";
import { COLORS } from "@/styles/colors";
import checkGreen from "../../assets/icons/check-green.svg";
import checkBlue from "../../assets/icons/check-blue.svg";
import checkYellow from "../../assets/icons/check-yellow.svg";

export const Journey = () => {
  return (
    <JourneyContainer>
      <Container>
        <Heading title="We Assist Families Throughout Their Entire Journey" />
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} textAlign="center">
            <JourneyItem>
              <Image src={wondering} width={100} height={100} alt="Wondering" className="mx-auto" />
              <h3  className="font-semibold">Wondering If It’s Autism?</h3>
              <p>
                Our autism screening tool, used by healthcare professionals, is
                available to you at no cost. Results are generated in under 5
                minutes, enabling you to take prompt action.
              </p>
              <CheckItem>
                <Image src={checkGreen} alt="Free screener" />
                <span>Free screener</span>
              </CheckItem>
            </JourneyItem>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <JourneyItem>
              <Image src={diagnosed} width={100} height={100} alt="Diagnosed"  className="mx-auto" />
              <h3 className="font-semibold">Newly Diagnosed</h3>
              <p>
                Get a free, personalized plan of the most important next steps
                to ensure your family is set up for success. The faster you take
                action, the better results you may achieve.
              </p>
              <CheckItem>
                <Image src={checkBlue} alt="Free screener" />
                <span>Personalized plan</span>
              </CheckItem>
            </JourneyItem>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <JourneyItem>
              <Image src={living} width={100} height={100} alt="Living"  className="mx-auto" />
              <h3  className="font-semibold">Living with Autism</h3>
              <p>
                Living with a child with autism can be both challenging and
                rewarding. Despite the challenges, the love, joy, and unique
                perspective that a child with autism can bring to a
                family&apos;s life can be immeasurable.
              </p>
              <CheckItem>
                <Image src={checkYellow} alt="Free screener" />
                <span>Tips and tricks</span>
              </CheckItem>
            </JourneyItem>
          </Grid>
        </Grid>
      </Container>
    </JourneyContainer>
  );
};

export const JourneyContainer = styled.div`
  background: #fff;
  padding: 60px 0px;
  h3 {
    margin: 25px 0px;
    font-size: 17px;
  }
  p {
    margin-bottom: 20px;
    min-height: 35px;
    line-height: 1.5;
    padding: 10px;
    min-height: 140px;
    font-size: 16px;
    font-weight: 300;
    color: ${COLORS.black};
    @media (max-width: ${sizes.sm}) {
      min-height: auto;
    }
  }
`;
export const JourneyItem = styled.div`
  margin-bottom: 50px;
`;

export const CheckItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
`;
