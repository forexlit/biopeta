import { Button } from "@/components/Button";
import Reviews from "@/components/Reviews";
import { Footer } from "@/views/Footer";
import { Navigation } from "@/views/Navigation";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import checkmark from "../assets/icons/checkmark.svg";
import chk from "../assets/icons/chk.svg";

const Wait = () => {
  const router = useRouter();
  return (
    <>
      <Navigation />
      <div className="bg-white">
        <div className="container mx-auto">
          <h1 className="font-semibold text-3xl md:text-5xl py-10 text-center">
            Wait! Before you join...
          </h1>
          <div className="rounded">
            <p className="text-xl font-semibold">
              You’ve already taken the first step toward lowering your cortisol
              and feeling your best again!
            </p>
            <p className="text-xl py-2">
              Over the next 14 days, you’ll learn various natural ways to reduce
              your cortisol.
            </p>
            <p className="text-lg">
              <>
                {" "}
                However, natural methods can sometimes take time to show
                results. If you want to achieve faster results, boost your
                progress, and:{" "}
              </>
            </p>
          </div>
          <ul className="py-5">
            <li className="flex items-center mb-2">
              <div className="mr-2">
                <Image src={chk} alt="checkmark" width={20} height={20} />
              </div>
              <span>Reduce stress even more effectively</span>
            </li>
            <li className="flex items-center mb-2">
              <div className="mr-2">
                <Image src={chk} alt="checkmark" width={20} height={20} />
              </div>
              <span>Boost your energy levels throughout the day</span>
            </li>
            <li className="flex items-center mb-2">
              <div className="mr-2">
                <Image src={chk} alt="checkmark" width={20} height={20} />
              </div>
              <span>Improve sleep quality for a refreshed wake-up</span>
            </li>
            <li className="flex items-center mb-2">
              <div className="mr-2">
                <Image src={chk} alt="checkmark" width={20} height={20} />
              </div>
              <span>Support your metabolism and overall health</span>
            </li>
          </ul>
          <div className="bg-green-50 border-2 border-green-500 p-3 rounded flex items-center mb-5">
            <Image
              src={checkmark}
              alt="checkmark"
              width={20}
              height={20}
              className="mr-5"
            />
            <p className="text-green-700">
              We have applied a free shipping available for the next 24 hours
              only.
            </p>
          </div>

          <div>
            <Button onClick={() => router.push("/product")}>
              {" "}
              See the product{" "}
            </Button>
          </div>
          <h2 className="text-4xl text-center py-10 mb-10">
            What our customers say about Cortiway
          </h2>
          <Reviews />

          <div className="bg-green-50 border-2 border-green-500 p-3 rounded flex items-center mt-10">
            <Image
              src={checkmark}
              alt="checkmark"
              width={20}
              height={20}
              className="mr-5"
            />
            <p className="text-green-700">
              We have applied a free shipping available for the next 24 hours
              only.
            </p>
          </div>

          <div className="flex items-center justify-center pt-10">
            <Button onClick={() => router.push("/product")}>
              Yes! I want to boost my results!
            </Button>
          </div>
          {/* <div className="text-center py-2">
            <span>or</span>
          </div> */}
          <div className="pt-5">
            <span
              className="flex items-center justify-center underline cursor-pointer"
              onClick={() => router.push("/day/1")}
            >
              No thanks, I'll join the challenge without the product.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wait;
