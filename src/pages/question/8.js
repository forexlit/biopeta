import { Button } from "@/components/Button";
import React from "react";
import Image from "next/image";
import product from "../../assets/products/colon/product2.jpg";
import { useRouter } from "next/router";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import logo from "../../assets/icons/cortiway3.png";
import { QUESTIONS } from "@/content/questions";
import { Progress } from "@/components/Progress";
import poop from "../../assets/images/poop.jpg";
const WeGotYou = () => {
  const router = useRouter();
  const currentPage = 8;
  const goBack = () => {
    router.back();
  };
  const handleNext = () => {
    router.push("/question/9");
  };
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <div className="flex cursor-pointer items-center" onClick={goBack}>
          <Image src={arrowLeft} className="" alt="Get back" />
          <span className="block ml-2">Back</span>
        </div>
        <div>
          <Image src={logo} width={132} height={30} alt="Cortiway" />
        </div>
        <div>
          <strong>{currentPage}</strong> / {QUESTIONS.length}
        </div>
      </div>

      <div className="container containersmall mx-auto">
        <Progress current={currentPage} total={QUESTIONS.length} />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <Image src={poop} alt="Cortiway" className="rounded-lg" />
          </div>
          <div className="col-span-12 mb-10">
            <div className="text-lg">
              <h3 className="text-3xl md:text-4xl font-semibold py-5">
                We got you!
              </h3>
              <p>That’s definitely something we can help you with.</p>
              <p className="py-3">
                With Cortiway you get <strong>natural ingredients</strong> to
                help you lose weight:
              </p>
              <ul>
                <li>
                  🌱<strong> Birch Chaga </strong>
                  <span className="block text-sm">
                    Packed with antioxidants to support your gut lining, reduce
                    bloating and constipation.
                  </span>{" "}
                </li>
                <li className="my-5">
                  🌲 <strong>Pine Bark Extract</strong>
                  <span className="block text-sm">
                    Promotes the growth of good bacteria while calming
                    inflammation.
                  </span>{" "}
                </li>
                <li>
                  🌿<strong> Fulvic Acids</strong>{" "}
                  <span className="block text-sm">
                    {" "}
                    Help balance your gut, boost nutrient absorption and
                    increase metabolism.
                  </span>
                </li>
              </ul>
              <p className="mb-8 mt-5">
                <strong>Let's finish the quiz and get to your results.</strong>
              </p>
              <Button full onClick={handleNext}>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeGotYou;
