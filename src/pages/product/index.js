/* eslint-disable @next/next/next-script-for-ga */
import React from "react";
import { TopNavigation } from "@/components/TopNavigation";
import { Footer } from "@/views/Footer";
import Head from "next/head";
import { Button } from "@/components/Button";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product2 from "../../assets/products/colon/product-progress.jpg";
import product3 from "../../assets/products/colon/product-ingredients.jpg";
import product4 from "../../assets/products/colon/product-symptoms.jpg";
import product5 from "../../assets/products/colon/product-reviews.jpg";
import product6 from "../../assets/products/colon/12.jpg";
import product7 from "../../assets/products/colon/13.jpg";

import clinicallyImg from "../../assets/products/colon/clinically.jpg";

import productNew from "../../assets/products/colon/product-new.jpg";
import gutIcon from "../../../public/icons/gut.png";
import constipationIcon from "../../../public/icons/constipation.png";
import hungerIcon from "../../../public/icons/hunger.png";
import bloatingIcon from "../../../public/icons/bloating.png";
import weightIcon from "../../../public/icons/weight.png";
import guthealthIcon from "../../../public/icons/guthealth.png";
import starYellow from "../../assets/icons/star-yellow.svg";
import weight from "../../../public/icons/gain-weight.png";
import ListItem from "@/components/ListItem";
import Covered from "@/components/Covered";
import Faq from "@/components/Faq";
import TimelineComponent from "@/components/Timeline";
import cortiwayPremium from "../../assets/products/colon/product3-min.jpg";
import arrowRight from "../../assets/icons/arrow-right.png";
import birchImg from "../../../public/icons/birch.png";
import pineImg from "../../../public/icons/pine.png";
import detoxImg from "../../assets/images/detox.jpg";
import lighterImg from "../../assets/images/lighter.jpg";
import appetiteImg from "../../assets/images/appetite.jpg";
import wellbeingImg from "../../assets/images/wellbeing.jpg";
import exred from "../../assets/icons/letter-x.png";
import ReviewsWithProduct from "@/components/ReviewsWithProduct";
import Compare from "@/components/Compare";
import { useRouter } from "next/router";

export default function ProductPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const router = useRouter();

  const handleSeeProduct = () => {
    router.push("/product/special-offer");
  };
  return (
    <>
      <Head>
        <title>Biopeta.com - Cortiway Premium Supplement</title>
        <meta name="description" content="Cortiway Premium Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-black text-white text-center p-2 flex items-center justify-center">
        <div className="flex">
          <Image src={starYellow} alt="Star" height={23} className="" />
          <Image src={starYellow} alt="Star" height={23} className="" />
          <Image src={starYellow} alt="Star" height={23} className="" />
          <Image src={starYellow} alt="Star" height={23} className="" />
          <Image src={starYellow} alt="Star" height={23} className="" />
        </div>
        <span className="pl-2">Trusted by over 32,419 happy customers</span>
      </div>
      <TopNavigation />
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-center max-w-[100%] md:max-w-[70%] mx-auto">
          Lose Weight With{" "}
          <span className="text-pink-600">
            NO Changes to Activity or Nutrition
          </span>{" "}
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold text-center max-w-[100%] md:max-w-[70%] mx-auto mt-2">
          The Proven Science Behind Cortiway Premium Success
        </h3>
        {/* <h2 className="text-md md:text-lg max-w-[100%] md:max-w-[60%] text-center mx-auto mt-5">
          The <span className="text-pink-600 font-semibold">NEW</span> version
          of Cortiway is finally here! Better, stronger, and more effective than
          ever… It has already helped thousands of people reach their body goals
          and burn fat more efficiently.{" "}
          <strong>
            Clinically proven to work, even when nothing else does.
          </strong>
        </h2> */}
        <h2 className="text-md md:text-lg max-w-[100%] md:max-w-[60%] text-center mx-auto mt-5">
          It’s clinically proven to help you burn fat faster, reduce bloating,
          support gut health, and achieve lasting change when nothing else has
          worked...
        </h2>
      </div>

      <div className="container mx-auto my-10">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 md:col-span-3 ">
            <h3 className="font-semibold text-3xl md:text-4xl mb-10 text-center md:text-left mt-5 md:mt-0">
              Are you ready for a{" "}
              <span className="text-pink-600">
                {" "}
                risk-free health revolution?
              </span>
            </h3>
            <ul>
              <ListItem className="" icon={gutIcon} title="Nurture Your Gut" />
              <ListItem className="" icon={weight} title="Master Weight Loss" />
              <ListItem
                className=""
                icon={hungerIcon}
                title="Control Your Appetite With Ease"
              />
              <ListItem
                className=""
                icon={bloatingIcon}
                title="Say Good Bye to Bloating"
              />
            </ul>

            <div className="hidden md:block">
              <Image src={arrowRight} alt="Arrow right" width={150} />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 order-first md:order-none">
            <Image
              src={cortiwayPremium}
              alt="Cortiway Premium"
              height={600}
              className="mx-auto rounded-lg"
            />
          </div>

          <div className="col-span-12 md:col-span-3 bg-white border-2 border-dashed p-5 border-black rounded-lg">
            <h3 className="text-center md:text-left text-2xl md:text-3xl  md:mt-0 mb-5 md:mb-5 font-semibold">
              {/* <strong className="font-semibold ">
                Try Now -{" "}
                <span className="text-pink-600">Pay After Results</span>
              </strong>{" "} */}
              Get Your First Bottle FREE –{" "}
              <span className="text-pink-600">Pay Only If It Works!</span>
            </h3>
            <h4 className="text-lg mb-3 md:mb-5">
              We're so confident you'll enjoy Cortiway Premium that{" "}
              <strong>we'll bear all the risk.</strong>
            </h4>

            <div className="grid grid-cols-12 gap-2 mt-5">
              <div className="col-span-12">
                <div className="border-2 border-black p-5 rounded-xl bg-white grid grid-cols-12 gap-2 mb-5">
                  {/* <div className="col-span-1">
                    <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    </div>
                  </div> */}
                  <div className="col-span-5 text-center ">
                    <span className="font-semibold">1 Bottle</span>
                    <Image
                      src="/product/1.jpg"
                      alt="Product"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="col-span-7">
                    <h3 className="font-semibold text-lg mb-2 leading-none">
                      Cortiway Premium
                      <span className="text-pink-600">Pay After Results</span>
                    </h3>
                    <div className="flex">
                      <h3
                        className={`text-2xl font-semibold ${"text-red-600"}`}
                      >
                        $ 0.00
                      </h3>

                      <span className="text-gray-500 ml-1 line-through text-sm">
                        $69.99
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5 md:mb-5 border text-sm border-red-400 rounded bg-red-50 p-2">
              <span className="text-red-600">
                <strong>Hurry Up!</strong> Limited to the first 1,000 bottles.
              </span>
            </div>
            <div>
              {/* <Button
                bg="#db2877"
                className="mx-auto"
                onClick={handleSeeProduct}
              >
                Check Availability
              </Button> */}
              <button
                className="mx-auto bg-[#db2877] w-full text-white rounded-lg uppercase font-semibold py-5"
                onClick={handleSeeProduct}
              >
                Check Availability
              </button>
              {/* <span className="text-center block mt-2">
                It only takes 3-min!
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pb-3">
        <h2 className="text-2xl text-center mt-5">
          <strong>Research-Backed, As Seen In…</strong>
        </h2>
        <Covered />
      </div>
      <div className="bg-white pt-10">
        <div className="container mx-auto mt-0 md:mt-10">
          <div className="grid grid-cols-12 gap-4 pb-5">
            <div className="col-span-12 md:col-span-6 pr-0 md:pr-10">
              <h1 className="text-3xl md:text-5xl mb-3 font-semibold text-center md:text-left">
                Relieve Constipation, Lose Weight, And Reduce Bloating! 🤩
              </h1>

              <ul className=" mt-10">
                <ListItem
                  className=""
                  icon={bloatingIcon}
                  title="Reduce bloating"
                />
                <ListItem
                  icon={constipationIcon}
                  title="Relieve constipation"
                />
                <ListItem
                  icon={guthealthIcon}
                  title="Strengthen your gut health"
                />
                <ListItem icon={weightIcon} title="Lose excess weight" />

                <li></li>
              </ul>
              <div className="my-10">
                <Button
                  onClick={handleSeeProduct}
                  bg="#db2877"
                  type={"buy"}
                  className=""
                >
                  Check Availability
                </Button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 order-first md:order-none">
              <Slider {...settings}>
                <div className="relative h-[380px] md:h-[380px] lg:h-[550px] rounded-lg">
                  <Image
                    src={product2}
                    className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                    fill
                    alt="Product"
                  />
                </div>
                <div className="relative h-[380px] md:h-[380px] lg:h-[550px] rounded-lg">
                  <Image
                    src={product5}
                    className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                    fill
                    alt="Product"
                  />
                </div>
                <div className="relative h-[380px] md:h-[380px] lg:h-[550px] rounded-lg">
                  <Image
                    src={product6}
                    className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                    fill
                    alt="Product"
                  />
                </div>
                <div className="relative h-[380px] md:h-[380px] lg:h-[550px] rounded-lg">
                  <Image
                    src={product7}
                    className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                    fill
                    alt="Product"
                  />
                </div>
                <div className="relative h-[380px] md:h-[380px] lg:h-[550px] rounded-lg">
                  <Image
                    src={product3}
                    className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                    fill
                    alt="Product"
                  />
                </div>
                <div className="relative h-[380px] md:h-[380px] lg:h-[550px] rounded-lg">
                  <Image
                    src={product4}
                    className="mx-auto px-0 md:px-10 object-cover rounded-lg"
                    fill
                    alt="Product"
                  />
                </div>
              </Slider>
              <div className="w-full text-center mt-7">
                <span className="text-xs">SWIPE LEFT TO SEE MORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-0 md:py-10 pb-[50px] md:pb-[100px]">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-5xl font-semibold text-center max-w-[100%] md:max-w-[70%] mx-auto py-10">
            What Is the MOST potent Cortiway Premium?
          </h3>
          <div className="grid grid-cols-12 gap-4 mt-0 md:mt-10">
            <div className="col-span-12 md:col-span-6">
              <div className="content text-lg">
                <p>
                  It’s{" "}
                  <strong>
                    a complete 1-month wellness course for those who struggle to
                    lose weight and want effective results
                  </strong>{" "}
                  without excessive exercise or starvation.
                </p>
                <p>
                  Cortiway Premium is a{" "}
                  <strong>clinically tested supplement</strong> with the highest
                  quality weight loss and gut health ingredients that
                  <strong>
                    {" "}
                    can only be sourced in limited quantities from a few regions
                    around the world.
                  </strong>{" "}
                </p>
                <div className="border-2 p-5 bg-white border-pink-400 border-dashed mb-4 rounded-lg">
                  <div className="flex">
                    <div className="min-w-[90px] h-[90px] border border-gray-300 flex items-center justify-center rounded-full mr-3">
                      <Image
                        src={birchImg}
                        alt="Pine"
                        className=""
                        width={80}
                      />
                    </div>
                    <p>
                      {/* <strong>Birch Chaga Extract</strong> */}
                      {/* <span className="text-[16px] leading-5 block">
                        Boosts nutrient absorption, decreases inflammation, and
                        supports a balanced gut microbiome to accelerate
                        metabolism and promote effective fat-burning for weight
                        loss.
                      </span> */}
                      <strong>Birch Chaga Extract</strong>{" "}
                      <ul className="text-[16px]">
                        <li>✅ Boosts nutrient absorption</li>
                        <li>✅ Decreases inflammation</li>
                        <li>✅ Supports a balanced gut microbiome</li>
                        <li>✅ Accelerates metabolism</li>
                        <li>✅ Promotes effective fat-burning</li>
                      </ul>{" "}
                    </p>
                  </div>

                  <div className="flex">
                    <div className="min-w-[90px] h-[90px] border border-gray-300 flex items-center justify-center rounded-full mr-3">
                      <Image src={pineImg} alt="Pine" className="" width={80} />
                    </div>
                    <p>
                      <strong>Pine Bark Extract</strong> <br />
                      {/* <span className="text-[16px] leading-5 block">
                        Enhances metabolic function and promotes fat oxidation
                        through its rich supply of antioxidants.
                      </span> */}
                      <ul className="text-[16px]">
                        <li>✅ Enhances metabolic function</li>
                        <li>✅ Rich in antioxidants</li>{" "}
                        <li>✅ Promotes fat oxidation</li>
                      </ul>{" "}
                    </p>
                  </div>
                </div>
                <p>
                  We believe in the power of our ingredients and helping you
                  find balance in your daily routine to achieve the results
                  you’ve always wanted.
                </p>
                <p>
                  Enjoy{" "}
                  <strong>
                    significantly lower body measurements, less bloating and
                    gas, reduced appetite, more energy, and better overall
                    health
                  </strong>{" "}
                  from the very first day… Even if nothing else you tried before
                  has ever worked!
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Image
                src={productNew}
                alt="New formula"
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-black text-white py-10">
          <div className="container mx-auto">
            <h3 className="mx-auto text-center font-semibold text-3xl md:text-4xl max-w-[100%] md:max-w-[60%]">
              Here's How It Works
            </h3>
          </div>
        </div>{" "}
        <div className="flex items-center justify-center z-[-1] bg-blue-50">
          <div className="bg-black w-[50px] h-[50px] rotate-[50deg] mt-[-30px]"></div>
        </div>
        <div className="bg-blue-50">
          <div className="container mx-auto">
            <h3 className="text-3xl md:text-4xl font-semibold text-center max-w-[100%] md:max-w-[70%] mx-auto py-10">
              <span>Month 1</span> -{" "}
              <span className="text-pink-600">Detox & Debloat</span>
            </h3>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7 bg-white p-5 md:p-10 rounded-lg">
                <h3 className="text-3xl font-semibold pb-5">
                  Embrace the Power of Fulvic Acid
                </h3>
                <div className="content text-lg">
                  <p>
                    Fulvic acid is a superhero ingredient when it comes to
                    supporting your gut health.
                  </p>
                  <p>
                    During the first week of taking Cortiway Premium, you may
                    notice a slight decrease in your appetite. Don’t worry –
                    this is a sign that the detox process has begun.
                  </p>
                  <p>
                    Fulvic acid begins to bind to toxins, heavy metals, and
                    other pollutants in the digestive tract, helping to remove
                    these substances from your body.
                  </p>
                  <p>
                    As a result, your body will reduce toxin storage, bowel
                    movements will become more regular, and your water weight
                    will start to drop.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 order-first md:order-none">
                <Image src={detoxImg} alt="detox" className="rounded-lg" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-10">
              <div className="col-span-12 md:col-span-5">
                <Image src={lighterImg} alt="detox" className="rounded-lg" />
              </div>
              <div className="col-span-12 md:col-span-7 bg-white p-5 md:p-10 rounded-lg">
                <h3 className="text-3xl font-semibold pb-5">Feel Lighter</h3>
                <div className="content text-lg">
                  <p>
                    85% of Cortiway users report significant bloating relief
                    within the first month of using the supplement.
                  </p>
                  <p>
                    Thanks to its fulvic acid-rich content, it provides relief
                    from painful cramps, severe bloating, gas build-up, and even
                    IBS.
                  </p>
                  <p>
                    At the same time, your nutrient absorption is improved by
                    breaking down proteins, fats, and carbohydrates.
                  </p>
                  <p>
                    As a result, your body will no longer store excess fat,
                    preventing any weight gain.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <h3 className="text-3xl md:text-4xl font-semibold text-center max-w-[100%] md:max-w-[70%] mx-auto py-10">
              <span>Month 2</span> -{" "}
              <span className="text-pink-600">Metabolism & Balance</span>
            </h3>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7 bg-white p-5 md:p-10 rounded-lg">
                <h3 className="text-3xl font-semibold pb-5">
                  Manage Your Appetite
                </h3>
                <div className="content text-lg ">
                  <p>
                    In the second month of using Cortiway Premium, 74% of our
                    users reported significantly reduced hunger and cravings,
                    resulting in weight loss.
                  </p>

                  <p>
                    As your gut begins to absorb nutrients more effectively,
                    you’ll feel less hungry and more satisfied after meals,
                    while your body starts to burn fat more efficiently.
                  </p>
                  <p>
                    It helps you control your appetite, reduce sugar or carb
                    cravings, and manage your weight successfully.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 order-first md:order-none">
                <Image
                  src={appetiteImg}
                  alt="appetite"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-10">
              <div className="col-span-12 md:col-span-5">
                <Image src={productNew} alt="burn fat" className="rounded-lg" />
              </div>
              <div className="col-span-12 md:col-span-7 bg-white p-5 md:p-10 rounded-lg">
                <h3 className="text-3xl font-semibold pb-5">
                  Burn fat & Lose weight
                </h3>
                <div className="content text-lg">
                  <p>
                    It’s time to get off the couch! Even if you don’t exercise
                    regularly, taking Cortiway Premium daily will make you more
                    energized and focused, burning more calories as you go.
                  </p>
                  <p>
                    The high concentration of antioxidants in Cortiway Premium
                    is essential for supporting normal energy production, a
                    healthy nervous system, and optimal psychological
                    development.
                  </p>

                  <p>
                    With your newfound energy, you’ll lose weight faster, feel
                    less stressed, and be healthier in general.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <h3 className="text-3xl md:text-4xl font-semibold text-center max-w-[100%] md:max-w-[70%] mx-auto py-10">
              <span>Month 3</span> -
              <span className="text-pink-600"> Rejuvenate & Thrive</span>
            </h3>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7 bg-white p-10 rounded-lg">
                <h3 className="text-3xl font-semibold pb-5">
                  Overal Wellbeing
                </h3>
                <div className="content text-lg ">
                  <p>
                    By the third month of using Cortiway Premium, you should
                    notice significant body and weight measurement changes.
                  </p>
                  <p>
                    Thanks to fulvic acid, your body will turn fat into fuel and
                    help you burn fat faster. In other words, you’ll burn more
                    calories without trying too hard.
                  </p>
                  <p>
                    Together with curbed cravings, more energy, and boosted
                    metabolism, you’ll be well on your way to achieving your
                    dream body!
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <Image
                  src={wellbeingImg}
                  alt="wellbeing"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto py-[80px] px-5">
            <Button className="mx-auto" onClick={handleSeeProduct}>
              Check Availability
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-0 md:my-10">
          <h3 className="text-4xl text-center max-w-[100%] md:max-w-[60%] mx-auto pt-10">
            {" "}
            Real, Verified Results:
          </h3>
          <h3 className="text-3xl md:text-4xl font-semibold text-center max-w-[100%] md:max-w-[60%] mx-auto">
            See Why Women All Over The World Calls
            <span className="text-pink-600">
              {" "}
              Cortiway Premium “Life Changing”
            </span>
          </h3>
          <h4 className="text-lg text-center max-w-[100%] md:max-w-[60%] mx-auto my-5 md:my-10">
            Note: All reviews below are from actual paying customers. They have
            been authenticated and verified
          </h4>
        </div>
        <ReviewsWithProduct />
        <div className="pb-10">
          <Button
            bg="#db2877"
            onClick={handleSeeProduct}
            className="mx-auto mt-10"
          >
            Check Availability
          </Button>
        </div>
      </div>

      <div className="bg-[#22BF8E]">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl text-center py-10 text-white font-semibold">
            Who is Cortiway Premium for?
          </h3>
        </div>
      </div>

      <div className="bg-[#e8f6f2]">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl  text-center max-w-[100%] md:max-w-[60%] mx-auto py-10">
            Cortiway Premium is perfect for those who struggle with…
          </h3>
          <ul className="">
            <li className="p-5 border border-dashed border-red-500 rounded-xl bg-white max-w-full md:max-w-[60%] mx-auto text-lg flex items-center mb-2">
              <Image
                src={exred}
                alt="x"
                className="mr-3"
                width={30}
                height={30}
              />
              Weight that won’t budge
            </li>
            <li className="p-5 border border-dashed border-red-500 rounded-xl bg-white max-w-full md:max-w-[60%] mx-auto text-lg flex items-center mb-2">
              <Image
                src={exred}
                alt="x"
                className="mr-3"
                width={30}
                height={30}
              />
              Stubborn belly fat
            </li>
            <li className="p-5 border border-dashed border-red-500 rounded-xl bg-white max-w-full md:max-w-[60%] mx-auto text-lg flex items-center mb-2">
              <Image
                src={exred}
                alt="x"
                className="mr-3"
                width={30}
                height={30}
              />
              Constant hunger and cravings
            </li>
            <li className="p-5 border border-dashed border-red-500 rounded-xl bg-white max-w-full md:max-w-[60%] mx-auto text-lg flex items-center mb-2">
              <Image
                src={exred}
                alt="x"
                className="mr-3"
                width={30}
                height={30}
              />
              Severe bloating
            </li>
            <li className="p-5 border border-dashed border-red-500 rounded-xl bg-white max-w-full md:max-w-[60%] mx-auto text-lg flex items-center mb-2">
              <Image
                src={exred}
                alt="x"
                className="mr-3"
                width={30}
                height={30}
              />
              Irregular bowel movements
            </li>
            <li className="p-5 border border-dashed border-red-500 rounded-xl bg-white max-w-full md:max-w-[60%] mx-auto text-lg flex items-center mb-2">
              <Image
                src={exred}
                alt="x"
                className="mr-3"
                width={30}
                height={30}
              />
              Low energy and fatigue
            </li>
            <li className="p-5 border border-dashed border-red-500 rounded-xl bg-white max-w-full md:max-w-[60%] mx-auto text-lg flex items-center mb-2">
              <Image
                src={exred}
                alt="x"
                className="mr-3"
                width={30}
                height={30}
              />
              Unhealthy cholesterol levels
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <div className="mx-auto py-10 md:py-[80px] px-5">
            <Button className="mx-auto" onClick={handleSeeProduct}>
              Check Availability
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 md:py-[100px]">
        <div className="container mx-auto">
          <Compare />
          <div className="mt-10 md:mt-[100px]">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7">
                <h3 className="text-center md:text-left mt-5 md:mt-0 text-4xl font-semibold">
                  It's Clinically Proven
                </h3>
                <p className="mt-10 text-xl">
                  Cortiway Premium is one of the few weight loss supplements on
                  the market that is clinically tested and proven to help with
                  gut health, appetite control, metabolism, and weight loss…
                </p>
                <p className="text-xl my-5">...without:</p>
                <ul className="text-xl">
                  <li className="flex items-center">
                    <div>
                      <Image src={exred} alt="X" height={30} className="mr-2" />
                    </div>
                    Depriving diets
                  </li>
                  <li className="flex items-center my-2">
                    <div>
                      <Image src={exred} alt="X" height={30} className="mr-2" />
                    </div>
                    Intensive workouts
                  </li>
                  <li className="flex items-center">
                    <div>
                      <Image src={exred} alt="X" height={30} className="mr-2" />
                    </div>
                    Radical lifestyle changes
                  </li>
                </ul>
                <p className="text-xl mt-5">
                  With a <strong>customer satisfaction rate of over 78%</strong>
                  , the clinical trials have proven it to be a safe and
                  effective choice already favored by thousands of users
                  worldwide.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 order-first md:order-none">
                <Image
                  src={clinicallyImg}
                  alt="Clinically proved"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button className="mx-auto" onClick={handleSeeProduct}>
              Check Availability
            </Button>
          </div>
        </div>
      </div>

      <div className="">
        <TimelineComponent />
        <div className="container mx-auto">
          <h2 className="text-4xl text-center pb-10 font-semibold">
            Ready For <span className="text-pink-600">YOUR</span> Journey?
          </h2>
          <div className=" mb-10 md:mb-[100px]">
            <Button className="mx-auto" onClick={handleSeeProduct}>
              Check Availability
            </Button>
          </div>
        </div>
        <div className="bg-gray-100 py-5 md:py-10">
          <h2 className="text-4xl text-center py-5 md:py-10 mb-10">
            Frequently asked questions by our customers
          </h2>
          <Faq />
        </div>
      </div>
      <Footer />
    </>
  );
}
