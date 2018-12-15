import React from "react";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import WhatWeDo from "../components/home/what-we-do";
import MoreInfo from "../components/home/more-info";
import HowItWorks from "../components/home/how-it-works";

export default () => (
  <Layout>
    <Hero />
    <WhatWeDo />
    <MoreInfo />
    <HowItWorks />
  </Layout>
);
