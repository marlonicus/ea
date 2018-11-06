import React from "react";
import { map } from "ramda";
import Layout from "../components/layout";

const Scientists = ({ scientists }) => (
  <Layout>
    <h1>Scientists</h1>
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
  const jobs = await fetch(`${process.env.API_HOST}/api/scientists`);
  const json = await jobs.json();
  return { scientists: json };
};

export default Scientists;
