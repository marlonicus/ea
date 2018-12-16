import React from "react";
import { connect } from "react-redux";
import { identity } from "ramda";
import Layout from "../../../components/layout";
import Hero from "../../../components/jobs/create/hero";
import SingleJob from "../../../components/jobs/single";
import env from "../../../utils/env";

const JobView = ({
  title,
  field,
  description,
  location,
  requirements,
  deadline
}) => (
  <Layout>
    <Hero title={title} subtitle={field} images={[true, false]} />
    <SingleJob
      description={description}
      location={location}
      requirements={requirements}
      deadline={deadline}
    />
  </Layout>
);

JobView.getInitialProps = async ({ query }) => {
  const job = await fetch(`${env("API_HOST")}/api/jobs/${query.id}`);
  const json = await job.json();
  return json;
};

export default connect(identity)(JobView);
