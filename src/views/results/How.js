import React from "react";
import styled from "styled-components";
import { Button } from "@/components/Button";
import { Container, Grid } from "@mui/material";
import { SmallContainer } from "@/components/SmallContainer";
import { FONTS } from "@/styles/fonts";
import { COLORS } from "@/styles/colors";
import one from "../../assets/icons/1.png";
import two from "../../assets/icons/2.png";
import three from "../../assets/icons/3.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { AFF_URL } from "@/utils/settings";

export const How = () => {
  const router = useRouter();
  const viewOffer = () => {
    router.push(AFF_URL);
  };
  return (
    <>
      <HowContainer>
        <SmallContainer>
          <h2>How CBD gummies works?</h2>
        </SmallContainer>

        <Container>
          <Grid container>
            <Grid item md={12} lg={4}>
              <NumberTitle>
                <Image src={one} alt="one" />
                <h3>Interacts with the endocannabinoid system (ECS)</h3>
              </NumberTitle>
              <p>
                It plays a crucial role in maintaining balance and homeostasis.
              </p>
            </Grid>
            <Grid item md={12} lg={4}>
              <NumberTitle>
                <Image src={two} alt="two" />
                <h3>Influences cannabinoid receptors</h3>
              </NumberTitle>
              <p>
                Primarily CB1 and CB2 receptors, found throughout the body and
                brain, modulating their activity.
              </p>
            </Grid>
            <Grid item md={12} lg={4}>
              <NumberTitle>
                <Image src={three} alt="three" />
                <h3>Regulate various physiological processes</h3>
              </NumberTitle>
              <p>
                Such as inflammation, pain perception, mood, sleep, and immune
                function, through its interaction with the ECS and other
                receptor systems.
              </p>
            </Grid>
          </Grid>
          <HowCta>
            <Button onClick={viewOffer}>View offer</Button>
          </HowCta>
        </Container>
      </HowContainer>
    </>
  );
};
export const HowContainer = styled.div`
  h2 {
    font-size: 40px;
    font-family: ${FONTS.primary};
    text-align: center;
    line-height: 1.2;
    color: ${COLORS.black};
    margin-bottom: 50px;
  }
  p {
    padding: 20px 0px;
    line-height: 1.5;
    font-weight: 300;
    color: ${COLORS.black};
  }
  background: #74d08a;
  padding: 80px 0px;
`;

export const NumberTitle = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 24px;
    font-family: ${FONTS.primary};
    color: ${COLORS.black};
    margin-left: -5px;
    line-height: 1;
    padding: 0px 15px;
  }
`;

export const HowCta = styled.div`
  text-align: center;
  padding-top: 50px;
`;
