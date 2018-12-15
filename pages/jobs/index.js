import React from "react";
import { connect } from "react-redux";
import { identity } from "ramda";
import Layout from "../../components/layout";
import env from "../../utils/env";
import { ModalsConsumer } from "../../components/modals";
import FilterableList from "../../components/filterable-list";
import JobsListItem from "../../components/jobs/list-item";
import Hero from "../../components/jobs/hero";

const Jobs = ({ jobs }) => (
  <Layout>
    <Hero />
    <FilterableList
      listItems={jobs}
      title=""
      ListItemComponent={JobsListItem}
    />
    <ModalsConsumer>
      {({ showModal }) => (
        <button type="button" onClick={() => showModal("create-job")}>
          Create job
        </button>
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
