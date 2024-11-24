import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Container } from "@mui/material";
import { Heading } from "@/components/Heading";
import { Review } from "@/components/Review";
import { Grid } from "@mui/material";
import { sizes } from "@/styles/breakpoints";
import { REVIEWS } from "@/content/reviews";
import { useRouter } from "next/router";
import Image from "next/image";
import starsGroup from "../../assets/icons/stars-group.svg";
import heartsGroup from "../../assets/icons/hearts-group.svg";
export const Reviews = () => {
  const router = useRouter();
  const handleTakeScreener = () => {
    router.push("/question/1");
  };
  return (
    <ReviewsContainer>
      <Container>
        <Heading title="We Love Helping Families Just Like Yours" />
        <RatingContainer>
          <RatingItem className="">
           <div> <h3>4.9 / 5</h3></div>
            <Image src={starsGroup} alt="rating" />
            <span>Rated 4.9/5 from over 712 reviews</span>
          </RatingItem>
          <RatingItem>
            <h3>18k+</h3>
            <Image src={heartsGroup} alt="rating" />
            <span>18k+ products sold</span>
          </RatingItem>
        </RatingContainer>
        <Grid container spacing={2}>
          {REVIEWS.map((review, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <Review review={review} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ReviewsContainer>
  );
};

export const ReviewsContainer = styled.div`
  background: ${COLORS.secondaryLight};
  padding: 60px 0px;
`;
export const Cta = styled.div`
  text-align: center;
  padding-top: 80px;
  @media (max-width: ${sizes.sm}) {
    padding-top: 50px;
  }
`;
export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const RatingItem = styled.div`
  text-align: center;
  width: 300px;
  max-width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 40px;
    padding-bottom: 10px;
    color: ${COLORS.black};
  }
  span {
    display: block;
    text-decoration: underline;
    color: ${COLORS.black};
    font-size: 14px;
    padding: 10px 0px;
  }
`;
