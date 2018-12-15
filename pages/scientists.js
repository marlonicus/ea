import React from "react";
import { map } from "ramda";
import env from "../utils/env";
import Layout from "../components/layout";
import Hero from "../components/profiles/hero";

const Scientists = ({ scientists }) => (
  <Layout>
    <Hero image="/static/scientists-hero.gif" title="Meet the scientists!" />

    <ul>
      {map(
        name => (
          <li>{name}</li>
        ),
        scientists
      )}
    </ul>
  </Layout>
);

Scientists.getInitialProps = async () => {
  const jobs = await fetch(`${env("API_HOST")}/api/scientists`);
  const json = await jobs.json();
  return { scientists: json };
};

export default Scientists;
