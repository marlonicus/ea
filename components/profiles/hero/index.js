import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background: #000 url(${({ image }) => image}) center center / cover no-repeat;
  color: white;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: lowercase;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Hero = ({ title, image }) => (
  <Container image={image}>
    <Title>{title}</Title>
  </Container>
);

export default Hero;
