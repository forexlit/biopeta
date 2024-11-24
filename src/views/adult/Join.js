import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/fonts";
import { sizes } from "@/styles/breakpoints";
import { Container } from "@mui/material";
import person1 from "../../assets/images/1.jpg";
import person2 from "../../assets/images/2.jpg";
import person3 from "../../assets/images/3.jpg";
import Image from "next/image";
import { Heading } from "@/components/Heading";
import { Grid } from "@mui/material";
import ctaImg from "../../assets/images/cta.svg";
import right from "../../assets/icons/right.svg";
import left from "../../assets/icons/left.svg";
import bar from "../../assets/icons/bar.svg";
import Link from "next/link";

export const Join = () => {
  return (
    <JoinContainer>
      <Container>
        <Heading title="Join Our Community" />
        <UsersContainer>
          <div>
            <UserCircle src={person1} />
          </div>
          <div>
            <UserCircle src={person2} withmargin={true} />
          </div>
          <div>
            <UserCircle src={person3} withmargin={true} />
          </div>
        </UsersContainer>
        <p>
          <strong>73,135</strong> people like you around the globe
        </p>
        <Cta>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <span>STEP 1</span>
              <h3>Take the free screener</h3>
              <p>
                Take a free screener used by health experts to screen for
                autism. Results are generated in under 5 minutes, enabling you
                to take prompt action.
              </p>
              <ArrowBox>
                <Image src={left} alt="left" />
                <span>
                  <Image src={bar} alt="bar" />
                </span>
                <Link href="/adult/question/1">
                  <Image src={right} alt="right" />
                </Link>
              </ArrowBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image src={ctaImg} alt="cta" />
            </Grid>
          </Grid>
        </Cta>
      </Container>
    </JoinContainer>
  );
};

export const JoinContainer = styled.div`
  background: ${COLORS.primary};
  padding: 60px 0px;
  text-align: center;
  p {
    padding: 10px 0px;
    font-weight: 300;
    color: ${COLORS.black};
    font-size: 18px;
  }
`;
export const UserCircle = styled(Image)`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-left: ${(props) => (props.withmargin ? "-20px" : "0px")};
`;

export const UsersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
`;

export const Cta = styled.div`
  color: ${COLORS.black};
  text-align: left;
  width: 85%;
  margin: 0 auto;
  background: #74d08a;
  padding: 50px;
  border-radius: 10px;
  margin-top: 20px;
  span {
    display: block;
    font-size: 12px;
    padding: 15px 0px;
    font-weight: bold;
  }
  h3 {
    color: ${COLORS.black};
    font-size: 30px;
    font-weight: 500;
    padding-bottom: 20px;
    font-family: ${FONTS.primary};
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }
  @media (max-width: ${sizes.sm}) {
    width: auto;
  }
`;
export const ArrowBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  span {
    margin: 0px 20px;
  }
  a:hover {
    opacity: 0.5;
  }
`;
