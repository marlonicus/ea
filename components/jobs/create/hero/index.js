import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ImageBase = `
  width: 100px;
  height: 100px;
  border: 2px solid #ccc;
  border-radius: 50%;
  text-align: center;

  :first-child {
    margin-right: -20px;
  }
`;

const Image = styled.img`
  background: #333;
  ${ImageBase};
`;

const QuestionMark = styled.div`
  ${ImageBase};
  background: transparent;
  z-index: 1;

  :before {
    content: "?";
    display: block;
    color: #ccc;
    font-size: 50px;
    line-height: 100px;
    vertical-align: middle;
  }
`;

const ProfileImagesContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  color: white;
`;

const Subtitle = styled.h3`
  color: white;
`;

const JobsHero = ({ title = "New project", subtitle, images }) => (
  <Container>
    <ProfileImagesContainer>
      {images[0] ? <Image /> : <QuestionMark />}
      {images[1] ? <Image /> : <QuestionMark />}
    </ProfileImagesContainer>

    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default JobsHero;
