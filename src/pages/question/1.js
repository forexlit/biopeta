import { Button } from "@/components/Button";
import React, { useState } from "react";
import Image from "next/image";
import product from "../../assets/products/colon/product2.jpg";
import { useRouter } from "next/router";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import logo from "../../assets/logo/logo2.png";
import { QUESTIONS } from "@/content/questions";
import { Progress } from "@/components/Progress";
import Cookies from "js-cookie";
const Breed = () => {
  const [breed, setBreed] = useState("");
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();
  const currentPage = 1;
  const goBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push("/question/2");
    Cookies.set("breed", breed, {
      expires: 7, // Cookie will expire in 7 days
      path: "/", // Make the cookie available across the entire site
    });
  };

  const handleBreed = (e) => {
    const value = e.target.value;
    if (value && value !== "") {
      setBreed(value);
      setError(false);
    } else {
      setError(true);
      setErrorMessage("Please select a breed.");
    }
  };
  return (
    <div className="bg-[#ebfaff] min-h-[100vh]">
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
          What is your dog's breed?
        </h1>
        <div className="flex items-center justify-center mt-5">
          <select
            className="border border-gray-300 rounded-md p-2 w-full p-5"
            onChange={handleBreed}
          >
            <option value="">Select Breed</option>
            <option value="labrador-retriever">Labrador Retriever</option>
            <option value="french-bulldog">French Bulldog</option>
            <option value="golden-retriever">Golden Retriever</option>
            <option value="german-shepherd">German Shepherd</option>
            <option value="poodle">Poodle</option>
            <option value="bulldog">Bulldog</option>
            <option value="beagle">Beagle</option>
            <option value="rottweiler">Rottweiler</option>
            <option value="dachshund">Dachshund</option>
            <option value="pointer">Pointer (German Shorthaired)</option>
            <option value="other">Other</option>
          </select>
        </div>
        {error && (
          <div className="bg-red-100 border border-red-300 text-red px-2 py-1 mt-2">
            {errorMessage}
          </div>
        )}
        <div className="mt-10">
          <Button full onClick={handleNext} disabled={!breed}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Breed;
