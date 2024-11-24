import React from "react";
import Image from "next/image";
import doctor from "../assets/images/doctors/doctor1.jpg";
import { Button } from "./Button";
import signature from "../assets/images/signature.png";
const Doctor = () => {
  return (
    <div>
      <div className="bg-white py-[50px]">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center font-semibold text-4xl mb-[80px]">
              A Personal Message from{" "}
              <span className="text-pink-600"> Our Head of Nutrition</span>
            </h3>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <Image
                src={doctor}
                alt="Nutritionist"
                height={500}
                className="rounded-lg mb-5"
              />
            </div>
            <div className="col-span-12 md:col-span-6 text-lg content">
              <p className="font-semibold">
                Did you know that 95% of weight loss supplements fail?
              </p>
              <p>
                Most weight loss supplements don’t deliver lasting results,
                because there’s no magic pill for sustainable fat loss. Often,
                the real challenge lies in the gut. Over time, toxins and waste
                can build up, blocking nutrient absorption and leading to
                constant hunger, bloating, constipation, and other uncomfortable
                symptoms.
              </p>
              <p>
                By focusing on gut health, you can unlock your body’s ability to
                absorb nutrients more effectively, curb cravings, and support
                natural, healthy weight loss. At Cortiway, we’re dedicated to
                helping you achieve these results by prioritizing gut wellness.
                Let us be part of your journey to lasting health and vitality!
              </p>
              <p>
                We're committed to making your weight-loss journey easier and
                more sustainable, so you can feel confident and empowered.
              </p>
              <div className="flex items-center">
                <h4 className="font-semibold text-xl py-5 mr-2">
                  Samantha L.,
                </h4>{" "}
                <span>Head of Nutrition, Cortiway</span>
              </div>
              <Image
                src={signature}
                alt="signature"
                height={100}
                className="mb-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
