import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../assets/logo/logo2.png";

export const TopNavigation = () => {
  return (
    <div className="flex justify-center items-center py-5 relative w-[100px] md:w-[150px] h-[50px] mx-auto pt-5">
      <Image src={logo} alt="Logo" className="object-contain" fill />
    </div>
  );
};
