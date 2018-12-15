import React from "react";
import env from "../utils/env";
import Layout from "../components/layout";
import Hero from "../components/profiles/hero";
import ProfilesTemplate from "../components/profiles/template";

const Scientists = ({ users }) => (
  <Layout>
    <Hero image="/static/scientists-hero.gif" title="Meet the scientists!" />
    <ProfilesTemplate users={users} type="Scientists" />
  </Layout>
);

Scientists.getInitialProps = async () => {
  const jobs = await fetch(`${env("API_HOST")}/api/profiles/scientist`);
  const json = await jobs.json();
  return { users: json };
};

export default Scientists;
