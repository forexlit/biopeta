import React from "react";
import Image from "next/image";
import heroImg from "../../assets/images/hero/biopeta.jpg";

import { Button } from "../../components/Button.js";
import { useRouter } from "next/router";
import ListItem from "../../components/ListItem";
import weight from "../../../public/icons/gain-weight.png";
import hairloss from "../../../public/icons/hair-loss.png";
import coat from "../../../public/icons/skin.png";
import hairhealth from "../../../public/icons/hair-health.png";

import bloatingIcon from "../../../public/icons/bloating.png";
import Covered from "@/components/Covered";
import WithAndWithout from "../WithAndWithout";
import Faq from "@/components/Faq";
import metabolismIcon from "../../../public/icons/stomach.png";
import WithFb from "@/components/proof/WithFb";
import hydrating from "../../../public/icons/hydrating.png";

export const Hero = () => {
  const router = useRouter();
  const handleSeeProduct = () => {
    router.push("/question/1");
  };
  return (
    <div>
      <div className="container mx-auto mt-0 md:mt-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 order-last md:order-first">
            <h1 className="text-3xl md:text-5xl font-semibold mb-10 text-center md:text-left">
              Hair Everywhere? Take Our Quiz to{" "}
              <span className="text-[#1d97bd]">
                Find the Shedding Solution!
              </span>
            </h1>
            <ul>
              <ListItem
                className=""
                icon={hairloss}
                title="Reduce Excess Shedding"
              />
              <ListItem
                className=""
                icon={coat}
                title="Promote a Healthy, Shiny Coat"
              />
              {/* <ListItem className="" icon={weight} title="Lose Weight" /> */}
              <ListItem
                className=""
                icon={hydrating}
                title="Soothe Itchy, Dry Skin"
              />

              <ListItem
                className=""
                icon={hairhealth}
                title="Support Overall Skin & Hair Health"
              />
            </ul>
            <div className="grid grid-cols-12 gap-3 mb-5 mt-0 md:mt-10">
              <div className="col-span-12">
                <Button onClick={handleSeeProduct}>Take The Quiz</Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 p-0 md:p-10 md:pt-0">
            <Image src={heroImg} alt="BIOPETA" className="rounded-xl" />
          </div>
        </div>
        <div className="pb-5">
          <h2 className="text-md md:text-2xl text-center mt-5">
            <strong>Research-Backed Ingredients, As Seen In…</strong>
          </h2>
        </div>
      </div>
      <div className="bg-[#ebfaff] py-5">
        <Covered />
      </div>
    </div>
  );
};
