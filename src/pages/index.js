import Head from "next/head";
import { Hero } from "@/views/home/Hero";
import { Journey } from "@/views/home/Journey";
import { Reviews } from "@/views/home/Reviews";
import { Join } from "@/views/home/Join";
import { Footer } from "@/views/Footer";
import Layout from "../components/Layout";
import { About } from "@/views/home/About";
import WithAndWithout from "@/views/WithAndWithout";
import ForFacts from "@/views/ForFacts";
import { ReviewsWithImage } from "@/views/home/ReviesWithImage";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import rev from "../assets/images/rew.png";
import fuss from "../assets/images/fuss.png";
import review from "../assets/reviews/rev1.jpg";
import Image from "next/image";
import ReviewsWithProduct from "@/components/ReviewsWithProduct";
import quotes from "../assets/icons/quotes.png";
import stars from "../assets/icons/stars.svg";
import verified from "../assets/icons/verified2.svg";
export default function Home() {
  const router = useRouter();

  const handleTakeQuiz = () => {
    router.push("/question/1");
  };
  return (
    <>
      <Head>
        <title>Biopeta.com - Natural Solutions for Pet Health </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Hero />

        <div className="container mx-auto my-10 mt-0 md:mt-[100px]">
          <WithAndWithout />
          <div className=" mt-10">
            <Button className="mx-auto" onClick={handleTakeQuiz}>
              Take the quiz
            </Button>
          </div>
        </div>
        <div className="bg-[#ebfaff] py-5 my-5">
          <div className="container mx-auto my-10">
            <h2 className="text-center font-bold text-3xl md:text-4xl w-full md:w-[60%] mx-auto">
              We Know For A Fact That{" "}
              <span className="text-[#1d97bd]">Shedding Gets Better!</span>
            </h2>
            <div className="grid grid-cols-12 gap-4 mt-[60px]">
              <div className="col-span-12 md:col-span-4 text-center mb-5">
                <h3 className="text-5xl text-center font-semibold mb-3">93%</h3>
                <p className="max-w-[70%] text-center mx-auto">
                  {" "}
                  of consumers noticed healthier, shinier fur*
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="col-span-12 md:col-span-4 text-center mb-5">
                  <h3 className="text-5xl text-center font-semibold mb-3">
                    8 <span className="text-lg">out of</span> 10
                  </h3>
                  <p className="max-w-[70%] text-center mx-auto">
                    of consumers noticed signifantly less shedding*
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="col-span-12 md:col-span-4 text-center mb-5">
                  <h3 className="text-5xl text-center font-semibold mb-3">
                    95%
                  </h3>
                  <p className="max-w-[70%] text-center mx-auto">
                    of consumers would recommend it to others*
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-gray-500 my-3 text-xs text-center">
            *this statement is based on data collected from a post-purchase
            survey conducted in June 2024.
          </div>
        </div>
        <div className=" my-10">
          <div>
            <h3 className="text-center text-3xl md:stext-4xl font-bold w-full md:w-[50%] mx-auto mb-[60px]">
              But don't just take our word for it. Hear{" "}
              <span className="text-[#1d97bd]">what others are saying</span>{" "}
              about BIOPETA...
            </h3>
          </div>
          <div className="container mx-auto grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-6">
              <div className="relative">
                <div className=" absolute left-5 top-[-20px] md:top-[-35px]">
                  <Image
                    src={quotes}
                    className="h-[50px] md:h-[80px] w-[50px] md:w-[80px]"
                    alt="quotes"
                    height={80}
                  />
                </div>
                <Image src={review} alt="review" className="rounded-xl" />
                <div className=" absolute right-5 bottom-[-20px] md:bottom-[-35px]">
                  <Image
                    src={quotes}
                    alt="quotes"
                    className="h-[50px] md:h-[80px] w-[50px] md:w-[80px]"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 p-0 md:p-8">
              <Image src={stars} alt="stars" />
              <h3 className="text-xl font-semibold mt-5">
                "I never thought I will be able to wear my black dress again!"
              </h3>
              <p className="text-lg mt-5 font-[300]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus ab veritatis id et! Ipsum, illo! Voluptate quia
                hic eos fuga deserunt, iure dolore unde nesciunt? Laudantium
                reiciendis culpa eius suscipit.
              </p>
              <p className="text-lg mt-5 font-[300]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo eveniet provident quo eum animi consectetur.
              </p>
              <div className="grid grid-cols-12 gap-3 mt-10">
                <div className="col-span-6 font-semibold">Jessica Miller</div>

                <div className="col-span-6 text-green-600 text-sm flex items-center justify-end">
                  <Image
                    src={verified}
                    alt="verified"
                    height={15}
                    className="mr-2"
                  />{" "}
                  Verified Customer
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-12 gap-3 mt-5">
            <div className="col-span-12 md:col-span-4">
              <div className="bg-gray-100 p-5">
                <Image src={stars} alt="stars" />
                <h3 className="py-3 font-semibold text-lg">
                  I never thought it could really work so well
                </h3>
                <p className="font-[300] text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente repudiandae ipsa cupiditate magni. Dolorum, iure
                  nobis enim distinctio, odit nesciunt, et quod nulla soluta
                  placeat voluptas ad quisquam id eaque?
                </p>
                <div className="grid grid-cols-12 gap-3 mt-10">
                  <div className="col-span-6 font-semibold">Jessica Miller</div>

                  <div className="col-span-6 text-green-600 text-sm flex items-center justify-end">
                    <Image
                      src={verified}
                      alt="verified"
                      height={15}
                      className="mr-2"
                    />{" "}
                    Verified Customer
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="bg-gray-100 p-5">
                <Image src={stars} alt="stars" />
                <h3 className="py-3 font-semibold text-lg">
                  I never thought it could really work so well
                </h3>
                <p className="font-[300] text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente repudiandae ipsa cupiditate magni. Dolorum, iure
                  nobis enim distinctio, odit nesciunt, et quod nulla soluta
                  placeat voluptas ad quisquam id eaque?
                </p>
                <div className="grid grid-cols-12 gap-3 mt-10">
                  <div className="col-span-6 font-semibold">Jessica Miller</div>

                  <div className="col-span-6 text-green-600 text-sm flex items-center justify-end">
                    <Image
                      src={verified}
                      alt="verified"
                      height={15}
                      className="mr-2"
                    />{" "}
                    Verified Customer
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="bg-gray-100 p-5">
                <Image src={stars} alt="stars" />
                <h3 className="py-3 font-semibold text-lg">
                  I never thought it could really work so well
                </h3>
                <p className="font-[300] text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente repudiandae ipsa cupiditate magni. Dolorum, iure
                  nobis enim distinctio, odit nesciunt, et quod nulla soluta
                  placeat voluptas ad quisquam id eaque?
                </p>
                <div className="grid grid-cols-12 gap-3 mt-10">
                  <div className="col-span-6 font-semibold">Jessica Miller</div>

                  <div className="col-span-6 text-green-600 text-sm flex items-center justify-end">
                    <Image
                      src={verified}
                      alt="verified"
                      height={15}
                      className="mr-2"
                    />{" "}
                    Verified Customer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <Button onClick={handleTakeQuiz} className="mx-auto mb-10">
            Take the quiz
          </Button>
        </div>
      </Layout>
    </>
  );
}
