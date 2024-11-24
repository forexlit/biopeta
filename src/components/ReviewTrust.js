import React from "react";
import star from "../assets/icons/star.svg";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";

import Image from "next/image";

const ReviewTrust = () => {
  return (
    <div className="border rounded-lg p-2">
      <div className="flex">
        <div className="relative w-10 h-10 rounded-full">
          <Image
            src={one}
            alt="review"
            width="100%"
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h3>Adrian Muir</h3>
          <div className="flex">
            <div className="w-5 h-5">
              <Image src={star} alt="star" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTrust;
