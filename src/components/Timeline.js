import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import stressIcon from "../../public/icons/calm.png";
import gutIcon from "../../public/icons/gut.png";
import weight from "../../public/icons/gain-weight.png";
import energyIcon from "../../public/icons/energy.png";
import people from "../../public/icons/people.png";
import energeticIcon from "../../public/icons/jump.png";
import weightIcon from "../../public/icons/weight.png";
import weightloss from "../../public/icons/weight-loss.png";
import slimIcon from "../../public/icons/slim.png";

import Image from "next/image";

const StressIcon = () => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
    <span>
      <Image src={energeticIcon} alt="Energy" />
    </span>
    {/* You can replace this emoji with any custom SVG or icon */}
  </div>
);
const SleepIcon = () => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
    <span>
      <Image src={weightIcon} alt="Weight" />
    </span>
    {/* You can replace this emoji with any custom SVG or icon */}
  </div>
);
const CalmIcon = () => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
    <span>
      <Image src={gutIcon} alt="Gut" />
    </span>
    {/* You can replace this emoji with any custom SVG or icon */}
  </div>
);
const WeightIcon = () => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
    <span>
      <Image src={weightloss} alt="weight" />
    </span>
    {/* You can replace this emoji with any custom SVG or icon */}
  </div>
);
const PeopleIcon = () => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
    <span>
      <Image src={slimIcon} alt="people" />
    </span>
    {/* You can replace this emoji with any custom SVG or icon */}
  </div>
);

const TimelineComponent = () => {
  return (
    <>
      <div className="text-center px-5">
        <h3 className="text-4xl mb-10 mt-[80px] max-w-[100%] md:max-w-[60%] mx-auto font-semibold">
          Here's What To Expect{" "}
          <span className="text-pink-600">Within 3 Months </span> of Taking
          Cortiway Premium
        </h3>
      </div>
      <div className=" mt-[30px] py-[20px] md:py-[100px]">
        <div className="container mx-auto">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Day 1-7"
              iconStyle={{
                background: "white",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<StressIcon />}
            >
              <h3 className="font-semibold text-xl mb-2">
                Day 1 - Energy Rush
              </h3>
              <span>
                Feel an energy boost that lasts throughout the day without
                crashing.
              </span>

              <span className="block mt-5"></span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Day 7 - 14"
              iconStyle={{
                background: "white",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<CalmIcon />}
            >
              <h3 className="font-semibold text-xl mb-2">
                Day 7 - Colon Detox
              </h3>
              <span>
                During the first 7 days, your body will gently flush out the
                waste weighing you down. This can boost the metabolism, stop
                weight gain, and increase fat burning. You’ll also notice
                smoother bowel movements.
              </span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Day 14 - 30"
              iconStyle={{
                background: "white",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<SleepIcon />}
            >
              <h3 className="font-semibold text-xl mb-2">
                Day 14 — Calorie Burning
              </h3>
              This is where you might start noticing the changes in your weight
              and body measurements. Your metabolism is boosted, so you have
              more energy, less cravings, and burn more calories with less
              effort.
              <span className="font-semibold block mt-3">
                84% of customers reported improved visible results.
              </span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Day 14 - 30"
              iconStyle={{
                background: "white",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<WeightIcon />}
            >
              <h3 className="font-semibold text-xl mb-2">
                Day 30 — Effective Weight Loss
              </h3>
              After 4 weeks, expect significant changes in your weight and
              overall well-being. Healthier habits will start forming, and
              you’ll finally feel in control of your hunger, cravings, and
              mental state.
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Day 30 - 60"
              iconStyle={{
                background: "white",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<PeopleIcon />}
            >
              <h3 className="font-semibold text-xl mb-2">
                Day 60 — Visible Changes
              </h3>
              Count your pounds as you drop them and prepare to reveal your
              “secret.” Friends and family may already notice your weight loss
              and want to know how you did it. Make the most of the surplus
              energy by incorporating light exercise into your daily routine.
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className="text-center mt-10"></div>
      </div>
    </>
  );
};

export default TimelineComponent;
