import React from "react";
import Image from "next/image";
import checkYellow from "../assets/icons/check-yellow.png";
import ex from "../assets/icons/ex.png";
import bf from "../assets/images/beforeafter.jpg";
import logowhite from "../assets/logo/logo-white.png";
const WithAndWithout = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-5">
          <Image src={bf} alt="Before and after" />
        </div>
        <div className="col-span-12 md:col-span-7 pl-0 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            Life with Fur vs. Life with BIOPETA
          </h2>
          <h3 className="text-lg">
            See how BIOPETA turns shedding chaos into a clean and happy home
          </h3>
          <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="col-span-12 md:col-span-6">
              <h4 className="text-2xl font-semibold p-5 pb-0 pt-0 md:pt-5">
                NOW
              </h4>
              <ul className="list gray-border">
                <li>
                  {" "}
                  <div className="">
                    <Image
                      src={ex}
                      alt="check"
                      width={20}
                      height={20}
                      className="mr-5"
                    />
                  </div>
                  Your couch, clothes, and car are covered in fur.
                </li>
                <li>
                  {" "}
                  <div className="">
                    <Image
                      src={ex}
                      alt="check"
                      width={20}
                      height={20}
                      className="mr-5"
                    />
                  </div>
                  Seasonal shedding leaves your home in a fur storm.
                </li>
                <li>
                  {" "}
                  <div className="">
                    <Image
                      src={ex}
                      alt="check"
                      width={20}
                      height={20}
                      className="mr-5"
                    />
                  </div>
                  Your dog’s fur looks lifeless and feels rough.
                </li>
                <li>
                  {" "}
                  <div className="">
                    <Image
                      src={ex}
                      alt="check"
                      width={20}
                      height={20}
                      className="mr-5"
                    />
                  </div>
                  Endless brushing sessions that still don’t stop the shedding.
                </li>
                <li>
                  {" "}
                  <div className="">
                    <Image
                      src={ex}
                      alt="check"
                      width={20}
                      height={20}
                      className="mr-5"
                    />
                  </div>
                  Your dog scratches constantly, looking uncomfortable.
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="bg-[#1d97bd] text-white font-semibold rounded-lg">
                <h4 className="text-2xl font-semibold p-5 pb-0 uppercase">
                  With <Image src={logowhite} alt="Biopeta" height={40} />
                </h4>
                <ul className="list gray-border">
                  <li className="">
                    <div className="">
                      <Image
                        src={checkYellow}
                        alt="check"
                        width={20}
                        height={20}
                        className="mr-5"
                      />
                    </div>
                    A cleaner home and fur-free outfits!
                  </li>
                  <li>
                    <div className="">
                      <Image
                        src={checkYellow}
                        alt="check"
                        width={20}
                        height={20}
                        className="mr-5"
                      />
                    </div>
                    Minimal shedding, even during coat-blowing seasons!
                  </li>
                  <li>
                    <div className="">
                      <Image
                        src={checkYellow}
                        alt="check"
                        width={20}
                        height={20}
                        className="mr-5"
                      />
                    </div>
                    A shiny, soft, and healthy coat that you love to pet.
                  </li>

                  <li className="">
                    <div className="">
                      <Image
                        src={checkYellow}
                        alt="check"
                        width={20}
                        height={20}
                        className="mr-5"
                      />
                    </div>
                    Less grooming, more time for belly rubs and fun!
                  </li>

                  <li>
                    <div className="">
                      <Image
                        src={checkYellow}
                        alt="check"
                        width={20}
                        height={20}
                        className="mr-5"
                      />
                    </div>
                    Soothed skin and a happier, itch-free pup.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAndWithout;
