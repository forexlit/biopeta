import React, { useState } from "react";
import { useRouter } from "next/router";
import Day1 from "@/components/days/1";
import Day2 from "@/components/days/2";
import { Collapse } from "@/components/Collapse";
import { Button } from "@/components/Button";
import Image from "next/image";
import arrow from "../../assets/icons/arrow-left.svg";
const Day = () => {
  const [activeDay, setActiveDay] = useState(2);
  const router = useRouter();
  const day = router.query.day;

  const onDayClick = (day) => {
    if (activeDay !== 1) {
      setActiveDay(day);
      router.push(`/day/${day}`);
    }
  };

  return (
    <div className="">
      <div className="">
        <Day1 />
        {/* <div className="flex space-x-4 bg-gray-200 p-3 rounded-xl overflow-x-scroll mt-10">
          {Array.from({ length: 14 }, (_, i) => (
            <div
              className={`border p-3 rounded-lg flex justify-center items-center min-w-[4rem] h-16 flex-col pt-3  hover:border-gray-400 ${
                activeDay === 1 ? "cursor-not-allowed" : " cursor-pointer"
              } ${
                i + 1 === activeDay
                  ? "bg-[#f6bb05] text-black font-semibold"
                  : "bg-white text-gray-500 hover:bg-slate-50"
              }`}
              key={i}
              onClick={() => onDayClick(i + 1)}
            >
              <div
                className={`text-sm ${
                  i + 1 === activeDay ? "text-black" : "text-gray-400"
                }`}
              >
                Day
              </div>
              <div className="text-xl">{i + 1}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-2 mt-5">
          <div className="col-span-6">
            {activeDay !== 1 && (
              <button
                className="flex justify-between items-center bg-gray-200 p-5 min-w-[200px] rounded-lg text-lg font-semibold uppercase"
                onClick={() => setActiveDay(activeDay - 1)}
              >
                <Image src={arrow} width={15} alt="Arrow" /> Go to Day{" "}
                {activeDay - 1}
              </button>
            )}
          </div>
          <div className="col-span-6 flex justify-end">
            <button
              className="flex justify-between items-center bg-[#F6BB05] p-5 min-w-[200px] rounded-lg text-lg font-semibold uppercase"
              onClick={() => setActiveDay(activeDay + 1)}
            >
              Go to Day {activeDay + 1}
              <Image
                className="rotate-180"
                src={arrow}
                width={15}
                alt="Arrow"
              />{" "}
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Day;
