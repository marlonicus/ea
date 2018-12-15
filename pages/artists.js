import React from "react";
import env from "../utils/env";
import Layout from "../components/layout";
import Hero from "../components/profiles/hero";
import FilterableList from "../components/filterable-list";
import ProfilesListItem from "../components/profiles/list-item";

const Artists = ({ users }) => (
  <Layout>
    <Hero image="/static/artists-hero.gif" title="Meet the artists!" />
    <FilterableList
      listItems={users}
      title="Artist Profiles"
      ListItemComponent={ProfilesListItem}
    />
  </Layout>
);

Artists.getInitialProps = async () => {
  const jobs = await fetch(`${env("API_HOST")}/api/profiles/artist`);
  const json = await jobs.json();
  return { users: json };
};

export default Artists;
