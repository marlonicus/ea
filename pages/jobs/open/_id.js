import React from "react";
import env from "../../../utils/env";

const JobView = () => <h1>Hello world</h1>;

JobView.getInitialProps = async ({ query }) => {
  const job = await fetch(`${env("API_HOST")}/api/jobs/${query.id}`);
  const json = await job.json();
  return json;
};

export default JobView;
