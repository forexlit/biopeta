import React from "react";
import Image from "next/image";
import bottleImg from "../assets/images/emptybottle.png";
import singleProductImg from "../assets/images/ourbottle.png";
import exGreen from "../assets/icons/ex-green.svg";
import exRed from "../assets/icons/letter-x.png";
const Compare = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-8 ">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Cortiway Premium Compared To Mass Marketing, One Dimensional Gut
          Health Products
        </h3>
      </div>
      <div className="col-span-2 ">
        <Image
          src={singleProductImg}
          height={150}
          alt="Cortiway"
          className="mx-auto"
        />
      </div>
      <div className="col-span-2  text-center font-semibold text-xl">
        <Image src={bottleImg} height={150} alt="Others" className="mx-auto" />
        Brand X
      </div>

      <div className="col-span-8 bg-gray-50 p-3">
        <h3 className="text-lg">
          Clinically tested and proven to help with gut health, appetite
          control, metabolism, and weight loss
        </h3>
      </div>
      <div className="col-span-2 bg-green-100 flex items-center">
        <Image src={exGreen} alt="YES" height={40} className="mx-auto" />
      </div>
      <div className="col-span-2  bg-red-100 flex items-center">
        <Image src={exRed} alt="No" height={30} className="mx-auto" />
      </div>

      <div className="col-span-8 bg-gray-50 p-3">
        <h3 className="text-lg">
          No fillers, stearates, coatings, dyes, GMOs, gluten, soy, dairy, heavy
          metals, or other junk
        </h3>
      </div>
      <div className="col-span-2 bg-green-100 flex items-center">
        <Image src={exGreen} alt="YES" height={40} className="mx-auto" />
      </div>
      <div className="col-span-2  bg-red-100 flex items-center">
        <Image src={exRed} alt="No" height={30} className="mx-auto" />
      </div>
      <div className="col-span-8 bg-gray-50 p-3">
        <h3 className="text-lg">Contains the highest quality ingredients</h3>
      </div>
      <div className="col-span-2 bg-green-100 flex items-center">
        <Image src={exGreen} alt="YES" height={40} className="mx-auto" />
      </div>
      <div className="col-span-2  bg-red-100 flex items-center">
        <Image src={exRed} alt="No" height={30} className="mx-auto" />
      </div>
      <div className="col-span-8 bg-gray-50 p-3">
        <h3 className="text-lg">
          Easy to use — convenient capsules, no mixing required
        </h3>
      </div>
      <div className="col-span-2 bg-green-100 flex items-center">
        <Image src={exGreen} alt="YES" height={40} className="mx-auto" />
      </div>
      <div className="col-span-2  bg-red-100 flex items-center">
        <Image src={exRed} alt="No" height={30} className="mx-auto" />
      </div>
      <div className="col-span-8 bg-gray-50 p-3">
        <h3 className="text-lg">
          Ingredients dosed according to scientific studies, not marketing
        </h3>
      </div>
      <div className="col-span-2 bg-green-100 flex items-center">
        <Image src={exGreen} alt="YES" height={40} className="mx-auto" />
      </div>
      <div className="col-span-2  bg-red-100 flex items-center">
        <Image src={exRed} alt="No" height={30} className="mx-auto" />
      </div>
      <div className="col-span-8 bg-gray-50 p-3">
        <h3 className="text-lg font-semibold">
          Backed by a 60-Day Money Back Guarantee
        </h3>
      </div>
      <div className="col-span-2 bg-green-100 flex items-center">
        <Image src={exGreen} alt="YES" height={40} className="mx-auto" />
      </div>
      <div className="col-span-2  bg-red-100 flex items-center">
        <Image src={exRed} alt="No" height={30} className="mx-auto" />
      </div>
    </div>
  );
};

export default Compare;
