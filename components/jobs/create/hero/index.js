import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  padding: 4rem 0;
  width: 300px;
`;

const QuestionMark = styled.div`
  width: 100px;
  height: 100px;
  background: transparent;
  border: 2px solid #ccc;
  border-radius: 50%;
  text-align: center;

  :before {
    content: "?";
    display: block;
  }
`;

const JobsHero = () => (
  <Container>
    <QuestionMark />
    <Image src="/static/jobs-hero.gif" />
  </Container>
);

export default JobsHero;
