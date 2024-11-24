import Head from "next/head";
import { Hero } from "@/views/home/Hero";
import Layout from "../components/Layout";
import WithAndWithout from "@/views/WithAndWithout";
import ForFacts from "@/views/ForFacts";
import { ReviewsWithImage } from "@/views/home/ReviesWithImage";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleTakeQuiz = () => {
    router.push("/question/1");
  };
  return (
    <>
      <Head>
        <title>Cortiway.com - Nautural Ways to Balance Your Hormones</title>
        <meta
          name="description"
          content="Take the quiz to find out how to balance your hormones naturally!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Hero />
        <WithAndWithout />
        <ForFacts />
        <div className="bg-white py-[50px]">
          <div className="container mx-auto">
            <div className="">
              <div>
                <h3 className="text-center font-semibold text-4xl mb-5">
                  Thousands of{" "}
                  <span className="text-pink-600">Happy Women</span>
                </h3>
                <h4 className="text-lg text-center mb-10">
                  This could be you – check out these reviews from women who’ve
                  transformed their health around the world!
                </h4>
              </div>
              <ReviewsWithImage />
            </div>
          </div>
        </div>
        <div className="py-[100px]">
          <div className="container mx-auto">
            <h3 className="text-center text-4xl font-semibold">
              Ready For a <span className="text-pink-600">Change</span>?
            </h3>
            <h4 className="text-lg text-center">
              Take our quiz to see how you can achieve similar results!
            </h4>
            <div className="mt-5">
              <Button onClick={handleTakeQuiz} bg="#db2877" className="mx-auto">
                Take the Quiz
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
