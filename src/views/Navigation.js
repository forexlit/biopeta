import React from "react";
import Image from "next/image";
import logo from "../assets/logo/logo2.png";
import { Container } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../styles/colors";
import { sizes } from "../styles/breakpoints";

export const Navigation = () => {
  return (
    <NavContainer>
      <div className="container mx-auto">
        <Nav>
          <div className="mx-auto">
            <Image src={logo} width={160} height={55} alt="logo" />
          </div>
        </Nav>
      </div>
    </NavContainer>
  );
};

export const NavContainer = styled.div`
  // background: ${COLORS.primary};
  padding: 15px 0px;
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: centers;
`;
export const Menu = styled.ul`
  list-style: none;
  li {
    display: inline-block;
    margin-left: 15px;
    cursor: pointer;
  }
`;
