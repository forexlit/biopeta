import { TopNavigation } from "@/components/TopNavigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import backImg from "../assets/icons/arrow-left.svg";
import Cookies from "js-cookie";
import furAlot from "../assets/icons/wool.png";
import hair from "../assets/icons/hair.png";
import natural from "../assets/icons/product/natural.webp";
import alcohol from "../assets/icons/product/alcohol.webp";
import paraben from "../assets/icons/product/paraben.webp";
import sulfate from "../assets/icons/product/sulfate.webp";
import cruelty from "../assets/icons/product/cruelty.webp";

const Summary = () => {
  const router = useRouter();
  const [page, setpage] = useState(1);
  const [breed, setBreed] = useState("");
  const [shedding, setShedding] = useState("");

  const urlPage = router.query.page;

  //DOG
  const breedCookie = Cookies.get("breed")?.replace(/"/g, "");
  const sheddingCookie = Cookies.get("shedding")?.replace(/"/g, "");

  useEffect(() => {
    if (urlPage) {
      setpage(parseInt(urlPage));
    }

    if (breedCookie) {
      setBreed(breedCookie);
    }
    if (sheddingCookie) {
      setShedding(sheddingCookie);
    }
  }, [urlPage]);

  const handleBack = () => {
    if (page > 1) {
      setpage(page - 1);
      router.push(`/summary?page=${page - 1}`);
    }
  };

  const returnBreedName = () => {
    switch (breed) {
      case "labrador-retriever":
        return "Labrador Retriever";
      case "french-bulldog":
        return "French Bulldog";
      case "golden-retriever":
        return "Golden Retriever";
      case "german-shepherd":
        return "German Shepherd";
      case "poodle":
        return "Poodle";
      case "bulldog":
        return "Bulldog";
      case "beagle":
        return "Beagle";
      case "rottweiler":
        return "Rottweiler";
      case "dachshund":
        return "Dachshund";
      case "pointer":
        return "Pointer (German Shorthaired)";
      case "other":
        return "dog";
      default:
        return "";
    }
  };
  return (
    <div className="bg-[#ebfaff] min-h-[100vh] pt-5 pb-10 rounded-lg">
      <div className="container containersmall mx-auto">
        <TopNavigation />
        {page > 1 && (
          <div
            className="cursor-pointer flex items-center"
            onClick={handleBack}
          >
            <div className="mr-2">
              <Image src={backImg} alt="back" height={15} />
            </div>
            Go back
          </div>
        )}
        <div className="bg-white p-5 mt-5 rounded">
          {page === 1 && (
            <>
              <h1 className="text-2xl md:text-3xl text-center font-semibold ">
                See how BioPeta can transform your dog's fur—and improve your
                life too!
              </h1>

              <div className="text-center my-5 md:my-10 text-sm">
                <span className="font-semibold text-4xl">86%</span>
                <span className="block mt-2 text-gray-500">
                  of {returnBreedName()} owners noticed signifantly less
                  shedding
                </span>
              </div>
              <div className="text-center font-semibold text-md mb-[60px]">
                Your dog's shedding can go from
              </div>
              <div className="grid grid-cols-12 gap-1 my-4">
                <div className="col-span-3 text-center">
                  <div className="rounded-l-full bg-red-400 h-6 mb-2 w-full relative">
                    {shedding &&
                      shedding === "It feels like I live in a fur storm" && (
                        <div className="absolute w-2 rounded-full h-[50px] bg-white left-1/2 transform -translate-x-1/2 top-[-8px]">
                          <div className="w-[3px] bg-red-600 h-[40px] mx-auto rounded-xl relative">
                            <div className="absolute w-10 h-10 rounded-full top-[-40px] left-[-18px] bg-white">
                              <div className="relative w-10 h-10 rounded-full border-2 shadow-lg">
                                <Image
                                  src={furAlot}
                                  alt="Fur"
                                  className="rounded-full"
                                  fill
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>

                  <span className="text-sm">Fur storm</span>
                </div>
                <div className="col-span-3 text-center">
                  <div className=" bg-orange-300 h-6 w-full mb-2 relative">
                    {shedding && shedding === "Heavy shedding" && (
                      <div className="absolute w-2 rounded-full h-[50px] bg-white left-1/2 transform -translate-x-1/2 top-[-8px]">
                        <div className="w-[3px] bg-red-600 h-[40px] mx-auto rounded-xl relative">
                          <div className="absolute w-10 h-10 rounded-full top-[-40px] left-[-18px] bg-white">
                            <div className="relative w-10 h-10 rounded-full border-2 shadow-lg">
                              <Image
                                src={furAlot}
                                alt="Fur"
                                className="rounded-full"
                                fill
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm">Heavy</span>
                </div>
                <div className="col-span-3 text-center">
                  <div className=" bg-green-200 h-6 w-full mb-2 relative">
                    {shedding && shedding === "Moderate shedding" && (
                      <div className="absolute w-2 rounded-full h-[50px] bg-white left-1/2 transform -translate-x-1/2 top-[-8px]">
                        <div className="w-[3px] bg-red-600 h-[40px] mx-auto rounded-xl "></div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm">Moderate</span>
                </div>
                <div className="col-span-3 text-center">
                  <div className=" bg-green-500 h-6 w-full rounded-r-full mb-2 relative">
                    {shedding && shedding === "Barely sheds" && (
                      <div className="absolute w-2 rounded-full h-[50px] bg-white left-1/2 transform -translate-x-1/2 top-[-8px]">
                        <div className="w-[3px] bg-red-600 h-[40px] mx-auto rounded-xl relative">
                          <div className="absolute w-10 h-10 rounded-full top-[-40px] left-[-18px] bg-white">
                            <div className="relative w-10 h-10 rounded-full border-2 shadow-lg">
                              <Image
                                src={furAlot}
                                alt="Fur"
                                className="rounded-full"
                                fill
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm">Barely</span>
                </div>
              </div>
              <div className="text-center font-semibold text-md mb-1">To</div>
              <div className="grid grid-cols-12 gap-1 my-4">
                <div className="col-span-3 text-center">
                  <div className="rounded-l-full bg-red-400 h-6 mb-2 w-full"></div>
                  <span className="text-sm">Fur storm</span>
                </div>
                <div className="col-span-3 text-center">
                  <div className=" bg-orange-300 h-6 w-full mb-2"></div>
                  <span className="text-sm">Heavy</span>
                </div>
                <div className="col-span-3 text-center">
                  <div className=" bg-green-200 h-6 w-full mb-2"></div>
                  <span className="text-sm">Moderate</span>
                </div>
                <div className="col-span-3 text-center">
                  <div className=" bg-green-500 h-6 w-full rounded-r-full mb-2 relative">
                    <div className="absolute w-2 rounded-full h-[50px] bg-white left-1/2 transform -translate-x-1/2 top-[-10px]">
                      <div className="w-[3px] bg-black h-[40px] mx-auto rounded-xl relative">
                        <div className="absolute w-10 h-10 rounded-full top-[-40px] left-[-18px] bg-white">
                          <div className="relative w-10 h-10 rounded-full border-2 shadow-lg">
                            <Image
                              src={hair}
                              alt="Fur"
                              className="rounded-full"
                              fill
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm">Barely</span>
                </div>
              </div>
              <div className="text-center font-semibold text-2xl pt-2">
                In less than 30 days
              </div>

              <div className="mt-5">
                <Button
                  full
                  onClick={() => {
                    router.push("/product/biopeta-anti-shedding");
                  }}
                >
                  See the product
                </Button>
              </div>
              <div className="flex items-center justify-center my-5">
                <div className="mr-2">
                  <Image src={natural} alt="100% Natural" height={65} />
                </div>
                <div className="mr-2">
                  <Image src={paraben} alt="Paraben free" height={65} />
                </div>
                <div className="mr-2">
                  <Image src={cruelty} alt="Cruelty free" height={65} />
                </div>
                <div className="mr-2">
                  <Image src={alcohol} alt="Alcohol free" height={65} />
                </div>
                <div>
                  <Image src={sulfate} alt="Sulfate free" height={65} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
