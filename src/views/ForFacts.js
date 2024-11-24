import { Button } from "@/components/Button";
import React from "react";
import Level from "@/components/Level";
import { useRouter } from "next/router";

const ForFacts = () => {
  const router = useRouter();

  const handleQuizClick = () => {
    router.push("/question/1");
  };
  return (
    <div className="container mx-auto">
      <div className="py-10">
        <h3 className="text-4xl md:text-5xl font-semibold text-center max-w-[100%] md:max-w-[60%] mx-auto my-5">
          We Know for a Fact That
          <span className="text-pink-600">
            {" "}
            Balancing Your Hormones Changes Everything
          </span>
        </h3>
        <h4 className="text-lg text-center max-w-[100%] md:max-w-[50%] mx-auto mb-[50px]">
          The numbers speak for themselves—check out our survey* results!
        </h4>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-4 text-center">
            <h5 className="text-6xl font-semibold">92%</h5>
            <p className="text-gray-600">
              reported a reduction in stress levels within the first two weeks
            </p>
            <div className="bg-gray-300 w-[80%] mx-auto  mt-5 rounded">
              <div className="bg-green-400 w-[92%] rounded text-white">
                21,427 participants
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 text-center">
            <h5 className="text-6xl font-semibold">85%</h5>
            <p className="text-gray-600">
              reported noticeable weight loss within the first three months of
              consistent use.
            </p>
            <div className="bg-gray-300 w-[80%] mx-auto  mt-5 rounded">
              <div className="bg-green-400 text-white w-[85%] rounded">
                19,584 participants
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 text-center">
            <h5 className="text-6xl font-semibold">88%</h5>
            <p className="text-gray-600">
              saw improvements in energy, mood, and focus after one month of use
            </p>
            <div className="bg-gray-300 w-[80%] mx-auto mt-5 rounded">
              <div className="bg-green-400 text-white w-[88%] rounded">
                20,275 participants
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <Button
            bg="#db2877"
            className="mx-auto mt-10"
            onClick={handleQuizClick}
          >
            Take the QUIZ
          </Button>
        </div>
        <div className="text-center">
          <span className="">
            * A 2014 survey of 23,040 women who have used Cortiway Hormone
            Balance
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForFacts;
