import React from "react";
import Image from "next/image";
import starYellow from "../assets/icons/star-yellow.svg";
const Ratings = ({ center, onClick }) => {
  return (
    <div className={`flex items-center ${center && "justify-center"}`}>
      <div className="flex mr-2">
        <Image src={starYellow} alt="Star" height={20} />
        <Image src={starYellow} alt="Star" height={20} />
        <Image src={starYellow} alt="Star" height={20} />
        <Image src={starYellow} alt="Star" height={20} />
        <Image src={starYellow} alt="Star" height={20} />
      </div>
      <span
        onClick={onClick}
        className="underline text-gray-500 cursor-pointer"
      >
        2,419+ Reviews
      </span>
    </div>
  );
};

export default Ratings;
