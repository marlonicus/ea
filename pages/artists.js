import React from "react";
import env from "../utils/env";
import Layout from "../components/layout";
import Hero from "../components/profiles/hero";
import ProfilesTemplate from "../components/profiles/template";

const Artists = ({ users }) => (
  <Layout>
    <Hero image="/static/artists-hero.gif" title="Meet the artists!" />
    <ProfilesTemplate users={users} type="Artists" />
  </Layout>
);

Artists.getInitialProps = async () => {
  const jobs = await fetch(`${env("API_HOST")}/api/profiles/artist`);
  const json = await jobs.json();
  return { users: json };
};

export default Artists;
