import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Hero = styled.section`
  background: #000 url("/static/hero.gif") center center / cover no-repeat;
  color: white;
  height: 280px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-transform: lowercase;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 0;
`;

export default () => (
  <Layout>
    <Hero>
      <Title>ExplainArtist</Title>
      <Subtitle>Create. Share. Learn.</Subtitle>
    </Hero>
  </Layout>
);
