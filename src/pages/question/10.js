import { Button } from "@/components/Button";
import React, { useState } from "react";
import Image from "next/image";
import product from "../../assets/products/colon/product2.jpg";
import { useRouter } from "next/router";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import logo from "../../assets/icons/cortiway3.png";
import { QUESTIONS } from "@/content/questions";
import { Progress } from "@/components/Progress";
import Cookies from "js-cookie";
const WeGotYou = () => {
  const [age, setAge] = useState(null);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();
  const currentPage = 10;
  const goBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push("/question/11");
    Cookies.set("age", age, {
      expires: 7, // Cookie will expire in 7 days
      path: "/", // Make the cookie available across the entire site
    });
  };

  const handleAge = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 16 && value <= 120) {
      // Assuming a maximum realistic human age of 120
      setAge(value);
      setError(false);
    } else {
      setError(true);
      setErrorMessage("Please enter a realistic age (16-120).");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <div className="flex cursor-pointer items-center" onClick={goBack}>
          <Image src={arrowLeft} className="" alt="Get back" />
          <span className="block ml-2">Back</span>
        </div>
        <div>
          <Image src={logo} width={132} height={30} alt="Cortiway" />
        </div>
        <div>
          <strong>{currentPage}</strong> / {QUESTIONS.length}
        </div>
      </div>
      <div className="container containersmall mx-auto">
        <Progress current={currentPage} total={QUESTIONS.length} />
        <h1 className="text-2xl md:text-3xl mb-2 md:mb-0 text-center font-semibold">
          How old are you?
        </h1>
        <div className="flex items-center justify-center mt-5">
          <input
            type="number"
            placeholder="Age"
            onChange={handleAge}
            className="w-[250px] p-5 border border-gray-400 rounded-lg text-2xl text-center"
          />
        </div>
        {error && (
          <div className="bg-red-100 border border-red-300 text-red px-2 py-1 mt-2">
            {errorMessage}
          </div>
        )}
        <div className="mt-10">
          <Button full onClick={handleNext} disabled={!age}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeGotYou;
