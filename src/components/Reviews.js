import React from "react";
import Image from "next/image";
import rev1 from "../assets/reviews/rev1.png";
import rev2 from "../assets/reviews/rev2.png";
import rev3 from "../assets/reviews/rev3.png";
import rev4 from "../assets/reviews/rev4.png";

const Reviews = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3">
          <Image src={rev1} alt="review" width="100%" />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Image src={rev2} alt="review" width={300} />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Image src={rev3} alt="review" width={300} />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Image src={rev4} alt="review" width={300} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
