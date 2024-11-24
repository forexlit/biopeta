import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { HERO } from "@/content/homepage";
import Image from "next/image";
import heroImg from "../../assets/images/hero.svg";
import { Button } from "../../components/Button.js";
import { sizes } from "@/styles/breakpoints";
import { FONTS } from "@/styles/fonts";
import { useRouter } from "next/router";
import user1 from "../../assets/images/users/1.svg";
import user2 from "../../assets/images/users/2.svg";
import user3 from "../../assets/images/users/3.svg";
import user4 from "../../assets/images/users/4.svg";
import user5 from "../../assets/images/users/5.svg";
import verified from "../../assets/icons/verified.svg";
import doctor from "../../assets/icons/doctor.svg";
import star from "../../assets/icons/star.svg";
export const Hero = () => {
  const router = useRouter();
  const handleTakeQuiz = () => {
    router.push("/adult/question/1");
  };

  return (
    <HeroContainer>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <HeroContent>
              <h1>
                Wondering If You May Be On The Spectrum? We Can
                <span style={{ color: COLORS.blue }}> H</span>
                <span style={{ color: COLORS.yellow }}>e</span>
                <span style={{ color: COLORS.red }}>l</span>
                <span style={{ color: COLORS.green }}>p</span>.
              </h1>
              <h2>{HERO.subHeadline}</h2>
              {/* <LookAlike>
                <PeopleList>
                  <ul>
                    <li>
                      <Image src={user1} alt="user" width={32} height={32} />
                    </li>
                    <li>
                      <Image src={user2} alt="user" width={32} height={32} />
                    </li>
                    <li>
                      <Image src={user3} alt="user" width={32} height={32} />
                    </li>
                    <li>
                      <Image src={user4} alt="user" width={32} height={32} />
                    </li>
                    <li>
                      <Image src={user5} alt="user" width={32} height={32} />
                    </li>
                  </ul>
                </PeopleList>
                <span>
                  <strong>73,315</strong> people like you around the globe!
                </span>
              </LookAlike> */}
              <Button onClick={handleTakeQuiz}>Take the free screener</Button>
              {/* <p>11,398 screeners taken in last 7 days </p> */}
              {/* <strong>Take A Free Screener for:</strong>
              <CtaButtons>
                <Button onClick={handleTakeQuiz}>Your Child</Button>
                <Button onClick={handleTakeQuizAdult} bg="#fff" border={true}>
                  Yourself
                </Button>
              </CtaButtons> */}
            </HeroContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            textAlign={{ xs: "center", md: "right" }}
          >
            <Image src={heroImg} alt="Hero" />
          </Grid>
        </Grid>
        <TrustBadges>
          <TrustItem>
            <Image src={doctor} alt="Healthcare" />
            <span>Certified by healthcare professionals</span>
          </TrustItem>
          <TrustItem>
            <Image src={verified} alt="Verified" />
            <span>Trusted by 73k users</span>
          </TrustItem>
          <TrustItem>
            <Image src={star} alt="Rating" />
            <span>Rated 4.8 / 5 from over 2k reviews</span>
          </TrustItem>
          <div></div>
        </TrustBadges>
      </Container>
    </HeroContainer>
  );
};

export const HeroContainer = styled.div`
  width: 100%;
  padding: 80px 0px;
  background: ${COLORS.primary};
  @media (max-width: ${sizes.sm}) {
    padding-top: 30px;
  }
  img {
    max-width: 100%;
    @media (max-width: ${sizes.sm}) {
      max-height: 200px;
    }
  }
  p {
    margin-top: 20px;
    text-decoration: underline;
    font-size: 16px;
    color: #000;
  }
  h1 {
    /* width: 80%; */
    font-family: ${FONTS.primary};
    color: ${COLORS.black};
    font-size: 50px;
    margin-bottom: 25px;
    font-weight: 600;
    line-height: 1.2;
    @media (max-width: ${sizes.sm}) {
      width: 100%;
      text-align: center;
      font-size: 37px;
    }
  }
  h2 {
    /* width: 80%; */
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 25px;
    line-height: 1.8;
    color: ${COLORS.black} @media (max-width: ${sizes.sm}) {
      width: 100%;
      text-align: center;
      font-size: 17px;
    }
  }
`;

export const HeroContent = styled.div`
  span {
    font-weight: 600;
    font-family: ${FONTS.primary};
  }
  @media (max-width: ${sizes.sm}) {
    text-align: center;
  }
`;

export const LookAlike = styled.div`
  background: #fff;
  margin-bottom: 30px;
  padding: 2px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: fit-content;
  span {
    font-size: 12px;
    font-weight: 300;
    padding-right: 10px;
    color: ${COLORS.black};
  }
`;

export const PeopleList = styled.div`
  display: flex;
  margin-right: 10px;
  ul {
    list-style: none;
    padding: 0;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin-left: -5px;
      height: 34px;
    }
  }
`;

export const TrustBadges = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  @media (max-width: ${sizes.sm}) {
    padding-top: 75px;
    flex-direction: column;
  }
`;

export const TrustItem = styled.div`
  padding: 0px 10px;
  display: flex;
  justify-content: space-around;
  @media (max-width: ${sizes.sm}) {
    /* flex-direction: column; */
    /* align-items: center;
    text-align: center; */
    padding: 10px 0px;
  }
  span {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const CtaButtons = styled.div`
  display: flex;
  margin-top: 20px;
  button:first-child {
    margin-right: 20px;
    @media (max-width: ${sizes.sm}) {
      margin-right: 10px;
    }
  }
`;
