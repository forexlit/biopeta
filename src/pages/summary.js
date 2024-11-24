import { TopNavigation } from "@/components/TopNavigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import Image from "next/image";
import gutAlert from "../assets/icons/gut-alert.png";
import weightLossJourney from "../assets/images/today.jpg";
import exRed from "../assets/icons/ex-red.svg";
import leftRight from "../assets/icons/left-right.png";
import lowImg from "../assets/icons/low.png";
import product from "../assets/images/product.png";
import checkmark from "../assets/icons/chk.svg";
import verified from "../assets/icons/ex-green.svg";
import capsules from "../assets/images/capsules.jpg";
import capsule from "../assets/images/capsule.png";
import healthyGut from "../../public/icons/healthy.png";
import { useRouter } from "next/router";
import backImg from "../assets/icons/arrow-left.svg";
import Cookies from "js-cookie";
import iconsList from "../assets/icons/icons-list.webp";
import bf from "../../public/reviews/bf.jpg";
import starYellow from "../assets/icons/star-yellow.svg";
import { ReviewsWithImage } from "@/views/home/ReviesWithImage";
import ReviewsWithProduct from "@/components/ReviewsWithProduct";
import ba1 from "../../public/ba/f5.jpg";
import ba2 from "../../public/ba/f2.jpg";
import ba3 from "../../public/ba/f3.jpg";
import ba4 from "../../public/ba/f4.jpg";
import Covered from "@/components/Covered";

const Summary = () => {
  const router = useRouter();
  const [page, setpage] = useState(1);
  const [BMI, setBMI] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [weightMetric, setWeightMetric] = useState("kg");
  const [age, setAge] = useState(0);

  const urlPage = router.query.page;

  const ageCookie = Cookies.get("age")?.replace(/"/g, "");
  const genderCookie = Cookies.get("gender")?.replace(/"/g, "");

  const currentWeightKg = Cookies.get("currentWeightKg")?.replace(/"/g, "");
  const currentWeightLb = Cookies.get("currentWeightLb")?.replace(/"/g, "");
  const goalWeightKg = Cookies.get("goalWeightKg")?.replace(/"/g, "");
  const goalWeightLb = Cookies.get("goalWeightLb")?.replace(/"/g, "");
  const weightMetricCookie = Cookies.get("weightMetric")?.replace(/"/g, "");

  const feetCookie = Cookies.get("feet")?.replace(/"/g, "");
  const inchesCookie = Cookies.get("inches")?.replace(/"/g, "");
  const height = Cookies.get("height")?.replace(/"/g, "");
  const heightMetric = Cookies.get("heightMetric")?.replace(/"/g, "");

  const calculateBMI = () => {
    let weightKg, heightM;
    weightKg =
      weightMetric === "kg" ? currentWeightKg : currentWeightLb * 0.453592;

    if (heightMetric === "cm") {
      heightM = height / 100; // cm to meters
    } else {
      const heightInches = parseInt(feetCookie) * 12 + parseInt(inchesCookie); // Convert feet + inches to inches
      heightM = heightInches * 0.0254; // Convert inches to meters
    }

    // Calculate BMI and ensure no invalid values
    if (weightKg && heightM) {
      setBMI((weightKg / (heightM * heightM)).toFixed(2));
    } else {
      console.error("Invalid weight or height for BMI calculation.");
    }
  };

  useEffect(() => {
    if (currentWeightKg && goalWeightKg) {
      setCurrentWeight(currentWeightKg);
      setGoalWeight(goalWeightKg);
    }

    if (currentWeightLb && goalWeightLb) {
      setCurrentWeight(currentWeightLb);
      setGoalWeight(goalWeightLb);
    }

    if (weightMetricCookie) {
      setWeightMetric(weightMetricCookie);
    }

    if (ageCookie) {
      setAge(parseInt(ageCookie));
    }
    calculateBMI();

    if (urlPage) {
      setpage(parseInt(urlPage));
    }
  }, [urlPage]);

  const handleBack = () => {
    if (page > 1) {
      setpage(page - 1);
      router.push(`/summary?page=${page - 1}`);
    }
  };

  return (
    <div className="container containersmall mx-auto">
      <TopNavigation />
      {page > 1 && (
        <div className="cursor-pointer flex items-center" onClick={handleBack}>
          <div className="mr-2">
            <Image src={backImg} alt="back" height={15} />
          </div>
          Go back
        </div>
      )}
      <div className="flex mt-5 justify-evenly">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className={`h-[5px] w-8 md:w-[60px] flex-none rounded-lg bg-gray-300 ${
              i === page - 1 ? "bg-pink-500" : ""
            }`}
          ></div>
        ))}
      </div>
      <div className="bg-white p-5 mt-5 rounded">
        {page === 1 && (
          <>
            <Image src={gutAlert} alt="Gut" className="mx-auto" height={100} />
            <h1 className="text-2xl text-center text-red-600">
              You may have an{" "}
              <strong>overgrowth of bad bacteria in your gut</strong>
            </h1>
            <p className="text-center my-5 font-thin">
              You can easily prevent this and start losing weight easier than
              you think. Find out your bacteria balance and see how Cortiway can
              help in your personal summary below.
            </p>
            <div className="text-center font-semibold text-lg mb-2">
              Your weight loss rate
            </div>
            <div className="relative">
              <div className="absolute bg-black top-[10%] left-2 text-white px-2 py-1 rounded">
                {currentWeight && currentWeight} {weightMetric}
              </div>
              <Image src={weightLossJourney} alt="Weight Loss Journey" />
              <div className="absolute bg-black bottom-[35%] right-0 text-white px-2 py-1 rounded">
                🤩 {goalWeight && goalWeight} {weightMetric}
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-10 bg-green-600 rounded mr-2"></div>{" "}
              <span className="block font-semibold">With Cortiway</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-10 bg-yellow-500 rounded mr-2"></div>{" "}
              <span className="block">With Dieting</span>
            </div>
            <div className="mt-5">
              <Button
                full
                onClick={() => {
                  router.push("/summary?page=2");
                }}
              >
                Continue
              </Button>
            </div>
            <div className="text-xs text-gray-500 mt-5">
              Results are not guaranteed. Cortiway users are expected to lose
              0.5 - 1 kg per week if they adopt a healthy lifestyle. Cortiway is
              formulated to make it faster and easier.
            </div>
          </>
        )}

        {page == 2 && (
          <>
            <h1 className="text-3xl text-center mb-5">
              Your bateria balance is:{" "}
              <strong className="text-red-600">weakened</strong>
            </h1>
            <Image
              src={leftRight}
              alt="Left Right"
              className="mx-auto mb-3"
              height={30}
            />
            <div className="grid grid-cols-12 gap-0 relative">
              <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 ">
                <Image src={lowImg} height={100} alt="low" />
              </div>
              <div className="col-span-6 bg-red-200">
                <div className="p-3">
                  <span className="text-center block text-red-600 font-semibold">
                    YOU are here
                  </span>
                  <h3 className="text-xl py-3 font-semibold mt-[120px]">
                    Weight gain zone
                  </h3>
                  <ul className="bacteria-list">
                    <li>Easy weight gain</li>
                    <li>Increased hunger & cravings</li>
                    <li>Excess fat storage</li>
                    <li>Brain fog & low energy</li>
                    <li>Bad bacteria overgrowth</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-6 bg-green-200">
                <div className="p-3">
                  <span className="text-center block text-green-700 font-semibold">
                    With Cortiway
                  </span>
                  <h3 className="text-xl py-3 font-semibold  mt-[120px]">
                    Weight loss zone
                  </h3>
                  <ul className="bacteria-list">
                    <li>Steady weight loss</li>
                    <li>Better appetite control</li>
                    <li>Increased fat-burning rate</li>
                    <li>More energy & sharp focus</li>
                    <li>Healthy bacteria balance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Button
                full
                onClick={() => {
                  router.push("/summary?page=3");
                }}
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {page == 3 && (
          <>
            <h1 className="text-3xl text-center">Your personal summary</h1>
            <p className="text-center my-5 font-thin">
              The quiz indicates that you might be carrying extra weight and
              experiencing an increased metabolic age, both of which can be
              linked to an imbalanced gut.
            </p>
            <div className="rounded shadow-lg border p-5">
              <p className="text-center font-semibold">YOUR BMI</p>
              <h4
                className={`${
                  BMI && BMI > 24 ? "text-red-600" : "text-black"
                } pt-3 pb-5 text-5xl font-semibold text-center`}
              >
                {BMI}
              </h4>
              <div className="grid grid-cols-12 gap-0">
                <div className="col-span-4">
                  <div className="h-8 w-full bg-slate-200 rounded-l-full relative mb-2">
                    {BMI && BMI < 24 && (
                      <div className="absolute w-2 rounded-full h-[50px] bg-white left-1/2 transform -translate-x-1/2 top-[-10px]">
                        <div className="w-[3px] bg-black h-[50px] mx-auto rounded-xl"></div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm">Normal </span>
                </div>
                <div className="col-span-4 text-center">
                  <div className="h-8 w-full bg-yellow-400 relative mb-2">
                    {BMI && BMI > 24 && BMI < 30 && (
                      <div className="absolute w-2 rounded-full h-[50px] bg-white left-1/2 transform -translate-x-1/2 top-[-10px]">
                        <div className="w-[3px] bg-black h-[50px] mx-auto rounded-xl"></div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-center">Overweight</span>
                </div>
                <div className="col-span-4 text-right">
                  <div className="h-8 w-full bg-red-500 rounded-r-full relative mb-2">
                    {BMI && BMI > 30 && (
                      <div className="absolute w-2 rounded-full h-[50px] bg-white left-1/2 transform -translate-x-1/2 top-[-10px]">
                        <div className="w-[3px] bg-black h-[50px] mx-auto rounded-xl"></div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-center">Obesity</span>
                </div>
              </div>
            </div>
            <div className="rounded shadow-lg border p-5 mt-3">
              <p className="text-center font-semibold">YOUR METABOLIC AGE</p>
              <h4 className="pt-3 text-5xl font-semibold text-center text-red-600">
                {parseInt(age) + 10} years
              </h4>
              <p className="text-center my-5 font-thin">
                Bad bacteria might be causing your body to hold on to fat.
              </p>
              <div className="bg-red-100 text-red-500 p-2 rounded font-semibold text-sm flex items-center">
                <Image src={exRed} alt="Danger" height={20} className="mr-2" />{" "}
                Your fat-burning rate is very low
              </div>
            </div>
            <div className="mt-5">
              <Button
                full
                onClick={() => {
                  router.push("/summary?page=4");
                }}
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {page == 4 && (
          <>
            <h1 className="text-3xl text-center mb-5">
              How does your gut bacteria affect weight loss?
            </h1>
            <p className="text-center">
              An overgrowth of bad bacteria may contribute to inflammation and
              metabolic dysfunction, making it challenging to shed those extra
              pounds.
            </p>
            <div className="rounded shadow-lg border p-5 mt-5">
              <p className="text-center font-semibold">Your metabolism</p>
              <h4 className="pt-3 pb-5 text-5xl font-semibold text-center text-red-600">
                Slow
              </h4>
              <p className="text-center">
                You’ve high level of bacteria that might impact difficulty for
                you to shed weight
              </p>
            </div>
            <div className="grid grid-cols-12 gap-1 my-8">
              <div className="col-span-3 text-center">
                <div className="rounded-l-full bg-red-400 h-8 mb-2 w-full"></div>
                <span>Very slow</span>
              </div>
              <div className="col-span-3 text-center">
                <div className=" bg-orange-300 h-8 w-full mb-2 relative">
                  <div className="absolute w-2 rounded-full h-[50px] bg-white left-1/2 transform -translate-x-1/2 top-[-10px]">
                    <div className="w-[3px] bg-black h-[50px] mx-auto rounded-xl"></div>
                  </div>
                </div>
                <span>Slow</span>
              </div>
              <div className="col-span-3 text-center">
                <div className=" bg-green-200 h-8 w-full mb-2"></div>
                <span>Fast</span>
              </div>
              <div className="col-span-3 text-center">
                <div className=" bg-green-500 h-8 w-full rounded-r-full mb-2"></div>
                <span>Very fast</span>
              </div>
            </div>
            <div className="mt-5">
              <Button
                full
                onClick={() => {
                  router.push("/summary?page=5");
                }}
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {page == 5 && (
          <>
            <h1 className="text-3xl text-center mb-5">
              Cortiway - designed to{" "}
              <span className="text-pink-600 font-semibold">
                restore balance to your gut
              </span>{" "}
              microbiome
            </h1>
            <p className="text-center">
              By incorporating Cortiway into your routine you’re setting the
              stage for a healthier gut and a more successful weight loss
              outcome.
            </p>
            <Image
              src={product}
              alt="product"
              className="mx-auto"
              height={400}
            />
            <ul className="mt-10">
              <li className="flex items-center mb-3">
                <div className="mr-2 min-w-[40px]">
                  <Image src={checkmark} alt="check" height={20} />
                </div>
                <div className="leading-[20px]">
                  <strong> Boosts your own unique gut composition</strong>,
                  instead of stuffing you with insane amounts of alienated good
                  bacteria
                </div>
              </li>
              <li className="flex items-center mb-3">
                <div className="mr-2 min-w-[40px]">
                  <Image src={checkmark} alt="check" height={20} />
                </div>
                <div className="leading-[20px]">
                  Includes potent blend of{" "}
                  <strong>prebiotic and polyphenol-rich compounds</strong> that
                  feed good bacteria, promote gut repair, and combat harmful
                  pathogens.
                </div>
              </li>
              <li className="flex items-center mb-3">
                <div className="mr-2 min-w-[40px]">
                  <Image src={checkmark} alt="check" height={20} />
                </div>
                <div className="leading-[20px]">
                  Unlike probiotics, our{" "}
                  <strong>natural ingredients withstand digestion</strong>,
                  ensuring full absorption and maximum gut effectiveness.
                </div>
              </li>
              <li className="flex items-center mb-3">
                <div className="mr-2 min-w-[40px]">
                  <Image src={checkmark} alt="check" height={20} />
                </div>
                <div className="leading-[20px]">
                  The unique molecular structure
                  <strong>
                    {" "}
                    withstands heat, moisture, and stomach acidity{" "}
                  </strong>
                  —eliminating the need for refrigeration or freeze-drying.
                </div>
              </li>
            </ul>
            <div className="mt-5">
              <Button
                full
                onClick={() => {
                  router.push("/summary?page=6");
                }}
              >
                Continue
              </Button>
            </div>
          </>
        )}
        {page == 6 && (
          <>
            <h1 className="text-3xl text-center mb-5">
              Wondering <strong className="text-pink-600">how quickly</strong>{" "}
              Cortiway can make a difference?
            </h1>
            <p className="text-center">
              Our carefully curated formula starts working from day one, helping
              to rebalance your gut microbiome and kickstart your journey to a
              lighter, healthier you.
            </p>
            <Image
              src={capsules}
              alt="product"
              className="mx-auto rounded-t-lg mt-5"
            />
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-6">
                <div className="bg-pink-100 p-4 md:p-8 text-center font-semibold uppercase min-h-[100px] text-sm md:text-md">
                  <div className="min-h-[60px] flex justify-center items-center">
                    <Image
                      src={capsule}
                      alt="capsule"
                      height={30}
                      className="mx-auto mb-2"
                    />
                  </div>
                  <div className="min-h-[60px]">
                    <span className="text-pink-600">TAKE 1 CAPSULE</span> BEFORE
                    BREAKFAST
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="bg-pink-200 p-4 md:p-8 text-center font-semibold uppercase text-sm md:text-md">
                  <div className="min-h-[60px]">
                    <Image
                      src={healthyGut}
                      alt="capsule"
                      height={40}
                      className="mx-auto mb-2"
                    />
                  </div>
                  <div className="min-h-[60px]">
                    ENJOY A <span className="text-pink-600">HEALTHY GUT </span>&
                    STEADY WEIGHT LOSS
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="py-5">
                <li className="">
                  <strong className="flex items-center  text-lg py-2">
                    {" "}
                    <div className="w-4 h-4 rounded-full border-2 border-pink-600 mr-2"></div>
                    1 - Curb hunger & cravings
                  </strong>
                  <p className="border-l-2 border-pink-400 ml-1 pl-3">
                    As beneficial bacteria start to grow and thrive in your gut,
                    they’ll help keep your hunger hormones in check. You’ll soon
                    notice that you’re less hungry and snacky.
                  </p>
                </li>
                <li className="">
                  <strong className="flex items-center  text-lg py-2">
                    {" "}
                    <div className="w-4 h-4 rounded-full border-2 border-pink-600 mr-2"></div>
                    2 - Feel fuller after eating
                  </strong>
                  <p className="border-l-2 border-pink-400 ml-1 pl-3">
                    As your gut starts clearing out all the built-up toxins,
                    your body will be able to properly digest food. You’ll
                    notice that you’re overeating less and can control your
                    appetite better.
                  </p>
                </li>
                <li className="">
                  <strong className="flex items-center text-lg py-2">
                    {" "}
                    <div className="w-4 h-4 rounded-full border-2 border-pink-600 mr-2"></div>
                    3 - Block fat storing
                  </strong>
                  <p className="border-l-2 border-pink-400 ml-1 pl-3">
                    At this point, your digestion and metabolism will keep
                    speeding up. A healthy bacteria balance will reignite your
                    body’s ability to burn fat naturally.
                  </p>
                </li>
                <li className="">
                  <strong className="flex items-center  text-lg py-2">
                    {" "}
                    <div className="w-4 h-4 rounded-full border-2 border-pink-600 mr-2"></div>
                    4 - Boost energy & focus
                  </strong>
                  <p className="border-l-2 border-pink-400 ml-1 pl-3">
                    Cortiway will keep nourishing your good gut bacteria,
                    enabling your body to properly absorb nutrients from food.
                    You’ll feel more energetic and productive.
                  </p>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <Image
                src={iconsList}
                height={80}
                className="mx-auto"
                alt="icons"
              />
            </div>
            <div className="mt-5">
              <Button
                full
                onClick={() => {
                  router.push("/summary?page=7");
                }}
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {page == 7 && (
          <>
            <h1 className="text-3xl text-center mb-5">
              But don't just take our word for it.{" "}
              <strong className="text-pink-600">
                Hear what others are saying
              </strong>{" "}
              about Cortiway:
            </h1>

            <Image
              src={bf}
              alt="product"
              className="mx-auto rounded-t-lg mt-5 mb-7"
            />
            <div className="">
              <div className="flex mr-2">
                <Image src={starYellow} alt="Star" height={22} />
                <Image src={starYellow} alt="Star" height={22} />
                <Image src={starYellow} alt="Star" height={22} />
                <Image src={starYellow} alt="Star" height={22} />
                <Image src={starYellow} alt="Star" height={22} />
              </div>
            </div>
            <div className="py-5 text-lg font-thin">
              <p>
                “Before Cortiway, I just couldn’t get the weight off. I’d lose
                and regain the same weight over and over again, felt hungry and
                miserable all the time.
              </p>
              <p className="py-5">
                Everything changed when I got Cortiway. Over time I noticed a
                lot less cravings, could control my appetite better, and lost a
                total of 39 lbs. Honestly I don’t remember the last time I felt
                this great inside and out.
              </p>
              <p>
                If you’re stuck at a weight that doesn’t make you happy, you owe
                yourself to try Cortiway. You won’t recognize yourself or your
                health.”
              </p>
            </div>

            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-6 font-semibold text-lg">Lila K.</div>
              <div className="col-span-6 flex items-center justify-end text-green-600">
                <Image
                  src={verified}
                  alt="verified"
                  height={20}
                  className="mr-2"
                />
                Verified customer
              </div>
            </div>

            <div className="mt-5">
              <Button
                full
                onClick={() => {
                  router.push("/summary?page=8");
                }}
              >
                Continue
              </Button>
            </div>
          </>
        )}
        {page == 8 && (
          <>
            <h1 className="text-3xl text-center mb-5">
              But don't just take our word for it.{" "}
              <strong className="text-pink-600">
                Hear what others are saying
              </strong>{" "}
              about Cortiway:
            </h1>
            <div className="py-5">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                  <Image src={ba2} alt="Before After" />
                </div>
                <div className="col-span-9">
                  <p>
                    “This really helped me with weight. Lost 13 lbs that never
                    came back!”
                  </p>
                  <div className="grid grid-cols-12 gap-0 mt-3">
                    <div className="col-span-6 font-semibold text-sm">
                      Kristie C.
                    </div>
                    <div className="col-span-6 flex items-center justify-end text-green-600 text-sm">
                      <Image
                        src={verified}
                        alt="verified"
                        height={20}
                        className="mr-2"
                      />
                      Verified
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 mt-5">
                <div className="col-span-3">
                  <Image src={ba1} alt="Before After" />
                </div>
                <div className="col-span-9">
                  <p>
                    “Taking care of your gut is probably the best thing you can
                    do for your weight loss.”
                  </p>
                  <div className="grid grid-cols-12 gap-0 mt-3">
                    <div className="col-span-6 font-semibold text-sm">
                      Mari O.
                    </div>
                    <div className="col-span-6 flex items-center justify-end text-green-600 text-sm">
                      <Image
                        src={verified}
                        alt="verified"
                        height={20}
                        className="mr-2"
                      />
                      Verified
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 mt-5">
                <div className="col-span-3">
                  <Image src={ba3} alt="Before After" />
                </div>
                <div className="col-span-9">
                  <p>
                    “I wish I’d found these sooner. Cortiway helped me achieve
                    my weight goal and then some.”
                  </p>
                  <div className="grid grid-cols-12 gap-0 mt-3">
                    <div className="col-span-6 font-semibold text-sm">
                      Janelle G.
                    </div>
                    <div className="col-span-6 flex items-center justify-end text-green-600 text-sm">
                      <Image
                        src={verified}
                        alt="verified"
                        height={20}
                        className="mr-2"
                      />
                      Verified
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 mt-5">
                <div className="col-span-3">
                  <Image src={ba4} alt="Before After" />
                </div>
                <div className="col-span-9">
                  <p>
                    “I take one capsule a day and finally feel and look lighter.
                    Lost 15 pounds too!”
                  </p>
                  <div className="grid grid-cols-12 gap-0 mt-3">
                    <div className="col-span-6 font-semibold text-sm">
                      Jessica S.
                    </div>
                    <div className="col-span-6 flex items-center justify-end text-green-600 text-sm">
                      <Image
                        src={verified}
                        alt="verified"
                        height={20}
                        className="mr-2"
                      />
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center mt-3">
                <span className="font-semibold">Fulvic acid covered in:</span>
              </div>
              <Covered />
            </div>
            <div className="mt-5">
              <Button
                full
                onClick={() => {
                  router.push("/product/cortiway");
                }}
              >
                Continue
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Summary;
