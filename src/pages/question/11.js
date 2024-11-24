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
  const [activeMetric, setActiveMetric] = useState("Imperial");
  const [feet, setFeet] = useState(null);
  const [inches, setInches] = useState(null);
  const [height, setHeight] = useState(null);

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();
  const currentPage = 11;
  const goBack = () => {
    router.back();
  };
  const handleNext = () => {
    router.push("/question/12");
    if (activeMetric === "Imperial") {
      Cookies.set("feet", feet, {
        expires: 7, // Cookie will expire in 7 days
        path: "/", // Make the cookie available across the entire site
      });
      Cookies.set("inches", feet, {
        expires: 7, // Cookie will expire in 7 days
        path: "/", // Make the cookie available across the entire site
      });
      Cookies.set("heightMetric", "feet", {
        expires: 7, // Cookie will expire in 7 days
        path: "/", // Make the cookie available across the entire site
      });
    } else {
      Cookies.set("height", height, {
        expires: 7, // Cookie will expire in 7 days
        path: "/", // Make the cookie available across the entire site
      });
      Cookies.set("heightMetric", "cm", {
        expires: 7, // Cookie will expire in 7 days
        path: "/", // Make the cookie available across the entire site
      });
    }
  };
  const handleMetric = (metric) => {
    setActiveMetric(metric);
    setError(false);
  };
  const handleFeetChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0 && value <= 8) {
      // Human height usually doesn't exceed 8 feet
      setFeet(value);
      setError(false);
    } else {
      setError(true);
      setErrorMessage("Please enter a realistic value for feet (0-8).");
    }
  };

  const handleInchesChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0 && value < 12) {
      // Inches must be between 0 and 11
      setInches(value);
      setError(false);
    } else {
      setError(true);
      setErrorMessage("Please enter a value for inches between 0 and 11.");
    }
  };

  const handleHeightChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 50 && value <= 300) {
      // Height in cm usually ranges from 50 to 300
      setHeight(value);
      setError(false);
    } else {
      setError(true);
      setErrorMessage(
        "Please enter a realistic value for height in cm (50-300)."
      );
    }
  };
  // Determine if the Next button should be disabled
  const isNextDisabled = () => {
    if (error) return true; // Disable if there's an error

    if (activeMetric === "Imperial") {
      // Disable if feet or inches are missing
      return feet === null || inches === null;
    }

    if (activeMetric === "Metric") {
      // Disable if height is missing
      return height === null;
    }

    return false; // Default to enabled
  };

  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <div className="flex cursor-pointer items-center" onClick={goBack}>
          <Image src={arrowLeft} className="" alt="Get back" />
          <span className="block ml-2">Back</span>
        </div>
        <div className="">
          <Image src={logo} width={132} height={30} alt="Cortiway" />
        </div>
        <div>
          <strong>{currentPage}</strong> / {QUESTIONS.length}
        </div>
      </div>
      <div className="container containersmall mx-auto">
        <Progress current={currentPage} total={QUESTIONS.length} />
        <h1 className="text-2xl md:text-3xl mb-2 md:mb-0 text-center font-semibold">
          What's your height?
        </h1>
        <div className="">
          <div className="w-full bg-gray-200 rounded-full p-1 mt-5">
            <div className="grid grid-cols-12 gap-2">
              <div
                className="col-span-6 rounded-3xl"
                onClick={() => handleMetric("Imperial")}
              >
                <div
                  className={`${
                    activeMetric === "Imperial"
                      ? "bg-gray-500 text-white font-semibold"
                      : "text-black"
                  }  rounded-full p-3 text-center  cursor-pointer`}
                >
                  Imperial
                </div>
              </div>
              <div
                className="col-span-6 text-center"
                onClick={() => handleMetric("Metric")}
              >
                <div
                  className={`${
                    activeMetric === "Metric"
                      ? "bg-gray-500 text-white font-semibold"
                      : "text-black"
                  }text-black rounded-full p-3 text-center cursor-pointer`}
                >
                  Metric
                </div>
              </div>
            </div>
          </div>
        </div>
        {activeMetric === "Imperial" ? (
          <div className="grid grid-cols-12 gap-2  mt-5">
            <div className="col-span-6">
              <div className="relative">
                <div className="absolute top-5 right-10">ft</div>
                <input
                  name="feet"
                  type="number"
                  min="0"
                  placeholder="Feet"
                  onChange={handleFeetChange}
                  className="w-full p-4 border border-gray-400 text-lg"
                />
              </div>
            </div>

            <div className="col-span-6">
              <div className="relative">
                <div className="absolute top-5 right-10">in</div>
                <input
                  name="inches"
                  type="number"
                  min="0"
                  placeholder="Inches"
                  onChange={handleInchesChange}
                  className="w-full p-4 border border-gray-400 text-lg"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-2  mt-5">
            <div className="col-span-12">
              <div className="relative">
                <div className="absolute top-5 right-10">cm</div>
                <input
                  name="height"
                  type="number"
                  min="0"
                  onChange={handleHeightChange}
                  placeholder="Height in cm"
                  className="w-full p-4 border border-gray-400 text-lg"
                />
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-300 text-red px-2 py-1 mt-2">
            {errorMessage}
          </div>
        )}

        <div className="mt-10">
          <Button disabled={isNextDisabled()} full onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeGotYou;
