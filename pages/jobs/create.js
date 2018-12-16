import React from "react";
import { connect } from "react-redux";
import { identity } from "ramda";
import Layout from "../../components/layout";
import env from "../../utils/env";
import Hero from "../../components/jobs/create/hero";

const Jobs = ({ jobs }) => (
  <Layout>
    <Hero />
  </Layout>
);

Jobs.getInitialProps = async () =>
  // const jobs = await fetch(`${env("API_HOST")}/api/jobs/archived`);
  // const json = await jobs.json();
  // return { jobs: json };
  ({});

export default connect(identity)(Jobs);
