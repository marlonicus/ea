import React from "react";
import env from "../utils/env";
import Layout from "../components/layout";
import Hero from "../components/profiles/hero";
import FilterableList from "../components/filterable-list";
import ProfilesListItem from "../components/profiles/list-item";

const Scientists = ({ users }) => (
  <Layout>
    <Hero image="/static/scientists-hero.gif" title="Meet the scientists!" />
    <FilterableList
      listItems={users}
      title="Scientist Profiles"
      ListItemComponent={ProfilesListItem}
    />
  </Layout>
);

Scientists.getInitialProps = async () => {
  const jobs = await fetch(`${env("API_HOST")}/api/profiles/scientist`);
  const json = await jobs.json();
  return { users: json };
};

export default Scientists;
