import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Container } from "@mui/system";
import logoImg from "../assets/logo/logo2.png";
import Link from "next/link";
import fb from "../assets/icons/fb.svg";
import group from "../assets/icons/group.svg";
import { COLORS } from "@/styles/colors";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="container mx-auto">
        <FlexContainer>
          <div>
            <Image src={logoImg} width={152} height={30} alt="logo" />
          </div>
          <div>
            {/* <ul>
              <li>
                <Link href="https://facebook.com/cortiwaycom" target="_blank">
                  <IconContainer>
                    <Image
                      src={fb}
                      width={18}
                      height={18}
                      alt="cortiway facebook"
                    />
                  </IconContainer>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/groups/cortiwayreach/"
                  target="_blank"
                >
                  <IconContainer>
                    <Image
                      src={group}
                      width={18}
                      height={18}
                      alt="cortiway instagram"
                    />
                  </IconContainer>
                </Link>
              </li>
            </ul> */}
          </div>
        </FlexContainer>
        <p>© 2019 - 2024 all rights reserved.</p>
        <FooterNav>
          <Link href="/privacy-policy">Privacy policy</Link>
          {/* <Link href="/terms">Terms & Conditions</Link> */}
        </FooterNav>
        <Disclaimer>
          Disclaimer: Content and statements on this website have not been
          evaluated by the Food and Drug Administration. This product is not
          intended to diagnose, treat, cure, or prevent any disease. It should
          not be substituted for medical advice or medical intervention. Please
          consult a qualified healthcare provider when making medical decisions.
          Exercise and a healthy diet are necessary to achieve and maintain
          weight loss.
        </Disclaimer>
      </div>
    </FooterContainer>
  );
};

export const FooterContainer = styled.div`
  padding: 50px 0px;
  background: #f5f5f5;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    margin-left: 10px;
  }
  p {
    padding: 10px 0px;
    font-size: 13px;
    color: ${COLORS.black};
    font-weight: 300;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const IconContainer = styled.div`
  background: ${COLORS.primary};
  width: 48px;
  height: 48px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #faf8f1;
  }
`;

export const Disclaimer = styled.p`
  font-size: 13px;
  opacity: 0.7;
`;

export const FooterNav = styled.div`
  margin: 10px 0px;
  display: flex;
  a {
    font-size: 12px;
    font-weight: 300;
    text-decoration: underline;
    margin-right: 10px;
    &:hover {
      text-decoration: none;
    }
  }
`;
