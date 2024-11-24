import React from "react";
import styled from "styled-components";
import { COLORS } from "@/styles/colors";
import { sizes } from "@/styles/breakpoints";
import Image from "next/image";
import arrowRight from "@/assets/icons/arrow-right.svg";
import cart from "@/assets/icons/cart.svg";

export const Button = ({
  children,
  onClick,
  disabled,
  full,
  bg,
  border,
  className,
  isLoading,
  id,
  type,
}) => {
  return (
    <ButtonContainer
      onClick={onClick}
      disabled={disabled}
      bg={bg}
      full={full}
      border={border}
      className={className}
      id={id ? id : "button"}
    >
      {type === "buy" && (
        <Image src={cart} alt="Cart" width={20} className="mr-5" />
      )}

      {isLoading ? "Loading..." : children}
      <Image src={arrowRight} alt="Arrow" width={15} className="ml-5" />
    </ButtonContainer>
  );
};

export const ButtonContainer = styled.button`
  width: ${(props) => (props.full ? "100%" : "auto")};
  border ${(props) => (props.border ? "1px solid #e8e8e8" : "none")};
  font-family: "Roboto", sans-serif;
  background: ${(props) => (props.bg ? props.bg : "#1d97bd")};
    padding: 20px 65px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :disabled {
    background: #d6dee1;
    color: #919191;
  }
  :hover {
    box-shadow: rgba(80, 133, 145, 0.12) 0px 1rem 1rem;
    transform: translatey(-5px);
    transition: 0.3s ease-in-out;
  }
  @media (max-width: ${sizes.sm}) {
    width: 100%;
    margin: 0 auto;
    font-size: 15px;
    padding: 20px 30px;
  }
`;
