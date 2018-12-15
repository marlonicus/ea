import React from "react";
import Layout from "../components/layout";
import EAHero from "../components/home/ea-hero";
import WhatWeDo from "../components/home/what-we-do";
import MoreInfo from "../components/home/more-info";

export default () => (
  <Layout>
    <EAHero />
    <WhatWeDo />
    <MoreInfo />
  </Layout>
);
