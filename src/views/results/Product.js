import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { SmallContainer } from "@/components/SmallContainer";
import { Grid } from "@mui/material";
import product from "../../assets/images/product.svg";
import { COLORS } from "@/styles/colors";
import { sizes } from "@/styles/breakpoints";
import checkmark from "../../assets/icons/checkmark.svg";
import { Button } from "../../components/Button";
import { AFF_URL } from "@/utils/settings";
import { useRouter } from "next/router";
import { Timer } from "@/components/Timer";

export const Product = () => {
  const router = useRouter();
  const viewOffer = () => {
    router.push(AFF_URL);
  };

  return (
    <>
      <SmallContainer>
        <h2>Delicious CBD Gummies to Restore Endocannabinoid levels</h2>
      </SmallContainer>
      <ProductOffer>
        <Grid alignItems="center" container>
          <Grid item md={6} lg={6}>
            <ProductImage>
              <Image src={product} alt="Product" />
            </ProductImage>
          </Grid>
          <Grid item md={6} lg={6}>
            <ProductContainer>
              <p>
                Experience peace of mind knowing that your child can enjoy the
                benefits of{" "}
                <strong>natural CBD in a safe and delicious form</strong>.
                Choice CBD gummies have been voted as #1 product by parents in
                our community. It's non-habit forming, effective and made in the
                USA!
              </p>
              {/* <Image src={perks} alt="Features" /> */}
              <h4>Parents who gave CBD gummies reported:</h4>
              <ul>
                <li>
                  <Image src={checkmark} alt="checkmark" />
                  Reduced hyperactivity and increased attention span
                </li>
                <li>
                  <Image src={checkmark} alt="checkmark" />
                  Reduced sleep onset, fewer nighttime wake-ups
                </li>
                <li>
                  <Image src={checkmark} alt="checkmark" />
                  Reduced social anxiety, children became more interested in
                  social interactions
                </li>
                <li>
                  <Image src={checkmark} alt="checkmark" />
                  Enhanced focus when learning new skills
                </li>
              </ul>
              <Timer />
              <Button onClick={viewOffer} full>
                View Offer
              </Button>
            </ProductContainer>
          </Grid>
        </Grid>
      </ProductOffer>
    </>
  );
};

export const ProductContainer = styled.div`
  p {
    font-weight: 300;
    color: ${COLORS.black};
    line-height: 1.5;
    padding: 20px 0px;
  }
  h4 {
    padding: 20px 0px;
    text-transform: uppercase;
  }
  ul {
    list-style: none;
    padding: 20px 0px;
    li {
      margin-bottom: 15px;
      font-weight: 300;
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
  }
`;
export const ProductOffer = styled.div`
  padding-bottom: 100px;
`;
export const ProductImage = styled.div`
  text-align: center;
  img {
    max-width: 100%;
    @media (max-width: ${sizes.sm}) {
      height: 300px;
    }
  }
`;
