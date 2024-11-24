import React from "react";
import { Hero } from "@/views/adult/Hero";
import Layout from "@/components/Layout";
import { Journey } from "@/views/adult/Journey";
import { Reviews } from "@/views/adult/Reviews";
import { About } from "@/views/adult/About";
import { Join } from "@/views/adult/Join";

export default function Adult() {
  return (
    <Layout>
      <Hero />
      <Journey />
      <Reviews />
      <About />
      <Join />
    </Layout>
  );
}
