import React, { useState } from "react";
import Image from "next/image";
import birch from "../../public/birch-chaga.jpeg";
import digestive from "../../public/digestive.webp";
import gut from "../../public/gut.webp";
import alergen from "../../public/alergen.png";
import hormone from "../../public/hormone.png";
import kids from "../../public/kids.webp";
import check from "../assets/icons/check.svg";
import best from "../../public/best.png";
import { Button } from "./Button";
import safe from "../../public/security.png";
import { Timer } from "./Timer";

const Offer = () => {
  const [option, setOption] = useState(1);

  return (
    <div className="bg-white rounded-lg p-6 text-center">
      <span className="bg-[#22bf8e] text-white font-semibold text-xs py-2 px-5 rounded-lg">
        OUR RECOMMENDATION
      </span>
      <h2 className="font-semibold text-2xl mb-5 mt-5">
        Our recommendation for reducing autism symptoms
      </h2>
      <p className="font-thin">
        Based on your data, we recommend starting with the 3-month subscription
        plan to achieve effective results or a 6-month subscription plan to form
        a longer-lasting routine.
      </p>
      {/* <Image src={best} alt="Best" width={150} height={150} className="mx-auto mt-5 absolute" /> */}
      <Image src={birch} alt="Birch" height={400} className="mx-auto mb-5" />
      <div className="flex justify-center">
        <Image src={digestive} height={70} alt="Digestive" className="mr-5" />
        <Image src={gut} height={70} className="mr-5" alt="Gut" />
        <Image src={kids} height={70} className="mr-5" alt="Kids" />
        <Image src={alergen} height={70} alt="Alergen" />
      </div>

      <div
        className={`${option === 1 ? "border border-[#f6bb05]" : "" }  mt-10 rounded-lg cursor-pointer`}
        onClick={() => setOption(1)}
      >
        <div className={`${option === 1 ? "bg-[#f6bb05]" : "bg-[#22bf8e]"} rounded-t-md text-xs uppercase font-semibold text-black py-2`}>
          Most popular
        </div>
        <div className={`${option === 1 ? "bg-yellow-50" : "bg-gray-50"} rounded-b-md`}>
          <div className="grid grid-cols-12 gap-2 p-2">
            <div className="col-span-6">
              <div className=" flex">
                <div className="mr-3">
                  <div className="w-5 h-5 rounded-full border border-1 border-gray-400 flex items-center justify-center">
                    {option === 1 && (
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    )}
                  </div>
                </div>
                <div>
                  <span className="font-thin">3-Month supply</span>
                  <span className="text-2xl block py-1 font-semibold">
                    $53.99
                  </span>
                  <span className="font-thin">/per bottle</span>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <ul className="text-left text-sm">
                <li className="flex items-center">
                  <Image
                    src={check}
                    width={15}
                    height={15}
                    className="mr-2"
                    alt=""
                  />{" "}
                  3 bottles delivered{" "}
                </li>
                <li className="flex items-center">
                  <Image
                    src={check}
                    width={15}
                    height={15}
                    className="mr-2"
                    alt=""
                  />{" "}
                  90 servings{" "}
                </li>
                <li className="flex items-center">
                  <Image
                    src={check}
                    width={15}
                    height={15}
                    className="mr-2"
                    alt=""
                  />{" "}
                  Serving size: 1 Truffle
                </li>
                <li className="flex items-center">
                  <Image
                    src={check}
                    width={15}
                    height={15}
                    className="mr-2"
                    alt=""
                  />{" "}
                  Cancel anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${option === 2 ? "bg-[#f6bb05] border border-orange-300" : "bg-[#22bf8e]" } mt-3 rounded-lg cursor-pointer`}
        onClick={() => setOption(2)}
      >
        <div className=" rounded-t-md text-xs uppercase font-semibold text-black py-2">
          Best value
        </div>
        <div className={`${option === 2 ? "bg-yellow-50" : "bg-gray-50"} rounded-b-md`}>
          <div className="grid grid-cols-12 gap-2 p-2">
            <div className="col-span-6">
              <div className="flex">
                <div className="mr-3">
                  <div className="w-5 h-5 rounded-full border border-1 border-gray-400 flex items-center justify-center">
                    {option === 2 && (
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    )}
                  </div>
                </div>
                <div>
                  <span className="font-thin">6-Month supply</span>
                  <span className="text-2xl block py-1 font-semibold">
                    $29.99
                  </span>
                  <span className="font-thin">/per bottle</span>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <ul className="text-left text-sm">
                <li className="flex items-center">
                  <Image
                    src={check}
                    width={15}
                    height={15}
                    className="mr-2"
                    alt=""
                  />{" "}
                  6 bottles delivered{" "}
                </li>
                <li className="flex items-center">
                  <Image
                    src={check}
                    width={15}
                    height={15}
                    className="mr-2"
                    alt=""
                  />{" "}
                  180 servings{" "}
                </li>
                <li className="flex items-center">
                  <Image
                    src={check}
                    width={15}
                    height={15}
                    className="mr-2"
                    alt=""
                  />{" "}
                  Serving size: 1 Truffle
                </li>
                <li className="flex items-center">
                  <Image
                    src={check}
                    width={15}
                    height={15}
                    className="mr-2"
                    alt=""
                  />{" "}
                  Cancel anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Timer />
        <form action={`/api/checkout_session?option=${option}`} method="POST">
        <section>
          <button type="submit" role="link">
            Take this offer
          </button>
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 100%;
              height: auto;
              border-radius: 6px;
              justify-content: space-between;
            }
            button {
              // height: 36px;
              font-family: "Roboto", sans-serif;
              background: #f6bb05;
              border-radius: 10px;
              color: #000;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
              padding: 20px 30px;
              font-size: 16px;
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </form>
        <div className="text-center mt-5 text-gray-400 underline">
          I don't want this offer
        </div>
      </div>
      <div className="mx-auto text-center w-full flex justify-center mt-10">
        <Image src={safe} alt="safe" width={280} />
      </div>
    </div>
  );
};

export default Offer;
