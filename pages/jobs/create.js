import React from "react";
import { connect } from "react-redux";
import { identity } from "ramda";
import Layout from "../../components/layout";
import Hero from "../../components/jobs/create/hero";
import Form from "../../containers/create-job";

const Jobs = () => (
  <Layout>
    <Hero images={[false, true]} />
    <Form />
  </Layout>
);

Jobs.getInitialProps = async () => ({});

export default connect(identity)(Jobs);
