import React from "react";
import { connect } from "react-redux";
import { identity } from "ramda";
import Layout from "../../components/layout";
import env from "../../utils/env";
import FilterableList from "../../components/filterable-list";
import JobsListItem from "../../components/jobs/list/list-item";
import Hero from "../../components/jobs/list/hero";
import CTA from "../../components/cta";

const Jobs = ({ jobs }) => (
  <Layout>
    <Hero />
    <FilterableList listItems={jobs} title="" ListItemComponent={JobsListItem}>
      <CTA href="/jobs/create" padding>
        Start a project
      </CTA>
    </FilterableList>
  </Layout>
);

Jobs.getInitialProps = async () => {
  const jobs = await fetch(`${env("API_HOST")}/api/jobs`);
  const json = await jobs.json();
  return { jobs: json };
};

export default connect(identity)(Jobs);
