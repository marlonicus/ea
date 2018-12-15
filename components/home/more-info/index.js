import React from "react";
import styled from "styled-components";
import CTA from "../../cta";

const Container = styled.section`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
`;

const MaxWidth = styled.div`
  max-width: 1440px;
  display: flex;
  padding: 3em;
  justify-content: center;
`;

const TextContainer = styled.article`
  position: relative;
  flex: 0.7;
  padding: 0 2em;
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.article`
  flex: 1;
`;

const Title = styled.h3``;

const Body = styled.p``;

const FixedAspectRatio = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const MoreInfo = () => (
  <Container>
    <MaxWidth>
      <TextContainer>
        <Title>Scientist?</Title>
        <Body>
          Visualisations or image material for your research papers or
          publications will help you communicate and explain your work. Our
          artists can help you realise your visions.
        </Body>
        <CTA href="/artists">Meet the artists</CTA>
      </TextContainer>

      <TextContainer>
        <Title>Artist?</Title>
        <Body>
          Working as a visualiser for scientific research can open whole new
          horizons. You will learn, meet new exciting people and earn money too!
        </Body>
        <CTA href="/scientists">Meet the researchers</CTA>
      </TextContainer>

      <VideoContainer>
        <Title>This is why we do what we do:</Title>
        <FixedAspectRatio>
          <Iframe
            title="Explainartist info video"
            src="https://player.vimeo.com/video/264140114"
            frameBorder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
          />
        </FixedAspectRatio>
      </VideoContainer>
    </MaxWidth>
  </Container>
);

export default MoreInfo;
