import React from "react";
import { connect } from "react-redux";
import { identity, map } from "ramda";
import Layout from "../components/layout";
import { ModalsConsumer } from "../components/modals";

const Jobs = ({ jobs }) => (
  <Layout>
    <ModalsConsumer>
      {({ showModal }) => (
        <>
          {map(
            ({ title, description }) => (
              <>
                <h2>{title}</h2>
                <p>{description}</p>
              </>
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

Jobs.getInitialProps = async ({}) => {
  const jobs = await fetch("http://localhost:3000/api/jobs");
  const json = await jobs.json();
  return { jobs: json };
};

export default connect(identity)(Jobs);
