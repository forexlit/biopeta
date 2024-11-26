import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import shipping from "../assets/icons/shipping.svg";
import usa from "../assets/icons/usa.svg";

export const Timer = ({ img, margin }) => {
  const [timeLeft, setTimeLeft] = useState(29 * 60 + 59); // Time in seconds
  const [isMounted, setIsMounted] = useState(false); // Check if component is mounted

  useEffect(() => {
    setIsMounted(true); // Set to true when component is mounted

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Return null or a static placeholder if not mounted to prevent hydration issues
  if (!isMounted) {
    return null; // Or you can return a placeholder here
  }

  return (
    <div className="border  border-red-600 rounded mt-5 p-2 z-[100] bg-white">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <Image src={img} height={60} alt="Discount" />
        </div>
        <div className="col-span-7">
          <strong className="flex block items-center text-xs md:text-[15px]">
            Get Your Free Waterless Shampoo – For a Limited Time Only! ✨
          </strong>
          <p className="text-xs md:text-sm mt-1">
            1 x BioPeta Waterless Shampoo 4 fl oz (118 g.){" "}
          </p>
          <div className="text-xs md:text-sm">
            <span className="line-through text-gray-500">$29.99</span>{" "}
            <span className="font-semibold">Free</span>
          </div>
          <div className="flex items-center font-thin"></div>
        </div>
        <div className="col-span-3 text-lg md:text-3xl">
          <Time>
            <div>
              <h1 className="text-red-600">
                {minutes}
                {/* <span>Min</span> */}
              </h1>
            </div>

            <Dots>
              <h1 className="text-red-600">:</h1>
            </Dots>
            <div>
              <h1 className="text-red-600">
                {seconds.toString().padStart(2, "0")}
                {/* <span>Sec</span> */}
              </h1>
            </div>
          </Time>
        </div>
      </div>
      {/* <TimerContainer margin={margin}>
        <Image src={img} width={25} height={25} alt="Discount" />
        <p>
          <strong className="flex block items-center">
            Order now and get it delivered in 3-5 days for free!
          </strong>
          <div className="flex items-center font-thin">
            <div className="mr-1">
              <Image src={usa} alt="USA" width={15} height={15} />{" "}
            </div>{" "}
            <span className="text-xs"> Limited time, USA Customers Only</span>
          </div>
        </p>
        <Time>
          <div>
            <h1>
              {minutes}
              <span>Min</span>
            </h1>
          </div>

          <Dots>
            <h1>:</h1>
          </Dots>
          <div>
            <h1>
              {seconds.toString().padStart(2, "0")}
              <span>Sec</span>
            </h1>
          </div>
        </Time>
      </TimerContainer> */}
    </div>
  );
};

export const TimerContainer = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "")};
  display: flex;
  border-radius: 10px;
  padding: 15px;
  p {
    font-weight: 500;
    line-height: 1.5;
    font-size: 15px;
    text-align: left;
    padding: 0px 20px;
  }
  img {
    margin: 0px !important;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 5px;
    text-align: center;
    font-weight: 600;
    span {
      font-size: 11px;
      display: block;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`;

export const Dots = styled.div`
  margin-top: 0px;
`;
