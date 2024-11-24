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
  const [currentWeightLb, setCurrentWeightLb] = useState(null);
  const [goalWeightLb, setGoalWeightLb] = useState(null);

  const [currentWeightKg, setCurrentWeightKg] = useState(null);
  const [goalWeightKg, setGoalWeightKg] = useState(null);

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();
  const currentPage = 11;
  const goBack = () => {
    router.back();
  };
  const handleNext = () => {
    router.push("/loading");
    if (activeMetric === "Imperial") {
      Cookies.set("currentWeightLb", currentWeightLb, {
        expires: 7, // Cookie will expire in 7 days
        path: "/",
      });
      Cookies.set("goalWeightLb", goalWeightLb, {
        expires: 7, // Cookie will expire in 7 days
        path: "/",
      });
      Cookies.set("weightMetric", "lb", {
        expires: 7, // Cookie will expire in 7 days
        path: "/",
      });
    }
    if (activeMetric === "Metric") {
      Cookies.set("currentWeightKg", currentWeightKg, {
        expires: 7, // Cookie will expire in 7 days
        path: "/",
      });
      Cookies.set("goalWeightKg", goalWeightKg, {
        expires: 7, // Cookie will expire in 7 days
        path: "/",
      });
      Cookies.set("weightMetric", "kg", {
        expires: 7, // Cookie will expire in 7 days
        path: "/",
      });
    }
  };
  const handleMetric = (metric) => {
    setActiveMetric(metric);
    if (metric === "Imperial") {
      setCurrentWeightKg(null);
      setGoalWeightKg(null);
    }
    if (metric === "Metric") {
      setCurrentWeightLb(null);
      setGoalWeightLb(null);
    }
  };

  const handleCurrentWeightLb = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 50 && value <= 700) {
      // Human weight usually doesn't exceed 700 lbs
      setCurrentWeightLb(value);
      setError(false);
    } else {
      setError(true);
      setErrorMessage(
        "Please enter a realistic value for weight (50-700 lbs)."
      );
    }
  };
  const handleGoalWeightLb = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 50 && value <= 700 && value < currentWeightLb) {
      // Human weight usually doesn't exceed 700 lbs
      setGoalWeightLb(value);
      setError(false);
    } else {
      setError(true);
      setErrorMessage(
        `Please enter a realistic value for weight (50-${currentWeightLb} lbs).`
      );
    }
  };
  const handleCurrentWeightKg = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 20 && value <= 300) {
      // Human weight usually doesn't exceed 700 lbs
      setCurrentWeightKg(value);
      setError(false);
    } else {
      setError(true);
      setErrorMessage("Please enter a realistic value for weight (20-300 kg).");
    }
  };
  const handleGoalWeightKg = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 20 && value <= 300 && value < currentWeightKg) {
      // Human weight usually doesn't exceed 700 lbs
      setGoalWeightKg(value);
      setError(false);
    } else {
      setError(true);
      setErrorMessage(
        `Please enter a realistic value for weight (20-${currentWeightKg} kg).`
      );
    }
  };
  const isNextDisabled = () => {
    if (error) return true; // Disable if there's an error

    if (activeMetric === "Imperial") {
      // Disable if feet or inches are missing
      return currentWeightLb === null || goalWeightLb === null;
    }

    if (activeMetric === "Metric") {
      // Disable if height is missing
      return currentWeightKg === null || goalWeightKg === null;
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
          <div className="grid grid-cols-12 gap-2  mt-10 px-10">
            <div className="col-span-12">
              <div className="text-center uppercase">Current Weight</div>
              <div className="relative">
                <div className="absolute top-5 right-5">lb</div>
                <input
                  type="number"
                  min="0"
                  onChange={handleCurrentWeightLb}
                  placeholder="Weight"
                  className="w-full p-4 border border-gray-400 text-lg"
                />
              </div>
            </div>

            <div className="col-span-12">
              <div className="text-center uppercase mt-3">Goal Weight</div>
              <div className="relative">
                <div className="absolute top-5 right-5">lb</div>
                <input
                  type="number"
                  min="0"
                  onChange={handleGoalWeightLb}
                  placeholder="Weight"
                  className="w-full p-4 border border-gray-400 text-lg"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-2  mt-10 px-10">
            <div className="col-span-12">
              <div className="text-center uppercase">Current Weight</div>
              <div className="relative">
                <div className="absolute top-5 right-5">kg</div>
                <input
                  type="text"
                  number
                  min="0"
                  placeholder="Weight"
                  onChange={handleCurrentWeightKg}
                  className="w-full p-4 border border-gray-400 text-lg"
                />
              </div>
            </div>

            <div className="col-span-12">
              <div className="text-center uppercase mt-3">Goal Weight</div>
              <div className="relative">
                <div className="absolute top-5 right-5">kg</div>
                <input
                  type="text"
                  number
                  min="0"
                  onChange={handleGoalWeightKg}
                  placeholder="Weight"
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
