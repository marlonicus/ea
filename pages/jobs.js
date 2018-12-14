import React from "react";
import { connect } from "react-redux";
import { identity, map } from "ramda";
import Layout from "../components/layout";
import env from "../utils/env";
import { ModalsConsumer } from "../components/modals";

const Jobs = ({ jobs }) => (
  <Layout>
    <ModalsConsumer>
      {({ showModal }) => (
        <>
          {map(
            ({ title, description }) => (
              <div key={title}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            ),
            jobs
          )}
          <button type="button" onClick={() => showModal("create-job")}>
            Create job
          </button>
        </>
      )}
    </ModalsConsumer>
  </Layout>
);

Jobs.getInitialProps = async () => {
  const jobs = await fetch(`${env("API_HOST")}/api/jobs`);
  const json = await jobs.json();
  return { jobs: json };
};

export default connect(identity)(Jobs);
