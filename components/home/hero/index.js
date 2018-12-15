import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background: #000 url("/static/hero.gif") center center / cover no-repeat;
  color: white;
  height: 360px;
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
  margin: 0 0 20px 0;
  padding: 0;
`;

const Hero = () => (
  <Container>
    <Title>ExplainArtist</Title>
    <Subtitle>Create. Share. Learn.</Subtitle>
  </Container>
);

export default Hero;
