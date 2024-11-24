import React, { useEffect } from "react";
import styled from "styled-components";
import { Timer } from "@/components/Timer";
import { sizes } from "@/styles/breakpoints";
import { Grid } from "@mui/material";
import { Button } from "../components/Button";
import Image from "next/image";
import box from "../assets/icons/box.svg";
import share from "../assets/icons/share.svg";
import product from "../assets/images/book/cover.png";
import { COLORS } from "@/styles/colors";
import lock from "../assets/icons/lock.svg";
import cards from "../assets/icons/cards.png";
import { loadStripe } from "@stripe/stripe-js";

export const Checkout = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);
  return (
    <div>
      <PriceContainer>
        <Image src={product} alt="Product" />
        <h3>
          <strong>From Overload to Balance:</strong>
          <br /> Reducing Autistic Symptoms with Effective Strategies
        </h3>
        <Pricing>
          <span>$49.99</span>
          <h3>$24.99</h3>
          <h5>-50% OFF!</h5>
        </Pricing>
      </PriceContainer>
      <Timer />
      <DiscountContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <DiscountCode>
              <span>Discount code:</span>
              <input type="text" value="SCREENER_50" readOnly />
            </DiscountCode>
          </Grid>
          <Grid item xs={12} md={6}>
            <Congrats>
              <strong>Congratulation!</strong>
              <span>Your discount code activated</span>
            </Congrats>
          </Grid>
        </Grid>
      </DiscountContainer>
      <form action="/api/checkout_session" method="POST">
        <section>
          <button type="submit" role="link">
            GET MY COPY
          </button>
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 100%;
              height: auto;
              border-radius: 6px;
              justify-content: space-between;
            }
            button {
              // height: 36px;
              font-family: "Roboto", sans-serif;
              background: #f6bb05;
              border-radius: 10px;
              color: #000;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
              padding: 20px 30px;
              font-size: 16px;
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </form>
      <HelperContainer>
        <Helper>
          <Image width={25} height={25} src={box} alt="box" />
          <span>
            <strong>Instant delivery</strong> to your e-mail
          </span>
        </Helper>
        <Helper>
          <Image src={share} width={20} height={20} alt="box" />
          <span>
            <strong>Easy to share</strong> with your spause or relatives
          </span>
        </Helper>
      </HelperContainer>
      <Secure>
        <Lock>
          <Image src={lock} width={15} height={15} alt="Lock" />
          <span>
            Guaranteed <strong>safe & secure</strong> checkout
          </span>
        </Lock>
        <CardList>
          <Image src={cards} alt="Cards" />
        </CardList>
      </Secure>
    </div>
  );
};
export const PriceContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${COLORS.secondary};
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 100px;
    height: auto;
    border-radius: 5px;
  }
  @media (max-width: ${sizes.md}) {
    padding: 15px;
    flex-direction: column;
    text-align: center;
    img {
      margin-bottom: 20px;
    }
  }
  h3 {
    padding: 0px 30px;
    font-weight: 300;
    @media (max-width: ${sizes.md}) {
      margin-bottom: 20px;
    }
  }
`;
export const Pricing = styled.div`
  text-align: right;
  @media (max-width: ${sizes.md}) {
    text-align: center;
  }
  span {
    text-decoration: line-through;
    color: #888;
  }
  h3 {
    font-size: 30px;
    font-weight: 600;
    padding: 5px 0px;
    @media (max-width: ${sizes.md}) {
      margin-bottom: 0px;
    }
  }
  h5 {
    color: red;
  }
`;

export const HelperContainer = styled.div`
  margin: 20px 0px;
`;
export const Helper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    font-weight: 300;
    font-size: 14px;
  }
  img {
    margin: 0;
    margin-right: 10px;
  }
`;

export const DiscountCode = styled.div`
  input {
    padding: 15px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid green;
    font-weight: bold;
  }
  span {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

export const DiscountContainer = styled.div`
  margin-bottom: 20px;
`;
export const Congrats = styled.div`
  padding-top: 20px;
  @media (max-width: ${sizes.md}) {
    padding-top: 0px;
  }
  strong {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }
  span {
    font-weight: 300;
    font-size: 15px;
    color: green;
  }
`;

export const Secure = styled.div`
  text-align: center;
  img {
    margin: 20px 0px;
  }
`;

export const Lock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 14px;
  img {
    margin-right: 10px;
  }
  border-bottom: 1px solid #dbeaf3;
`;
export const CardList = styled.div`
  img {
    max-width: 300px;
    height: auto;
  }
`;
