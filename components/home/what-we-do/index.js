import React from "react";
import styled from "styled-components";
import CTA from "../../cta";

const Container = styled.section`
  padding: 4em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 360px;
`;

const Text = styled.p`
  margin: 2em 0;
`;

const WhatWeDo = () => (
  <Container>
    <Image src="/static/ea-formula.gif" />
    <Text>
      We bring scientists and artists together for collaborative work.
    </Text>
    <CTA href="/jobs" padding>
      View jobs
    </CTA>
  </Container>
);

export default WhatWeDo;
