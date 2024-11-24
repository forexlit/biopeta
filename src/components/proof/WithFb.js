import React from "react";
import Image from "next/image";
import fbReviews from "../../assets/reviews/fb2.png";
import { Button } from "../Button";
import Ratings from "../Ratings";

const WithFb = () => {
  return (
    <div className="grid grid-cols-12 gap-4 py-5 md:py-10">
      <div className="col-span-12 md:col-span-6">
        <Image src={fbReviews} alt="Facebook Reviews" />
        <div className="md:hidden py-5">
          <Button
            className="hidden mx-auto"
            onClick={() => (window.location.href = "/question/1")}
          >
            Take the quiz
          </Button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 text-center flex items-center flex-col justify-center order-first md:order-none">
        <div className="mx-auto text-center mb-2">
          <Ratings center />
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold">
          Women are{" "}
          <span className="text-pink-600">thrilled with the results</span> from
          our new Cortiway Premium!
        </h2>
        <h2 className="mt-5 text-md md:text-xl">
          You too can experience the benefits of a healthy gut, natural weight
          support, and the confidence that Cortiway Premium brings to everyday
          life!
        </h2>
        <div className="hidden md:block">
          <Button
            className="hidden mx-auto"
            onClick={() => (window.location.href = "/question/1")}
          >
            Take the quiz
          </Button>
          {/* <div className="mx-auto text-center">
            <Ratings center />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WithFb;
