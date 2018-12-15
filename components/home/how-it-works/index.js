import React from "react";
import styled from "styled-components";
import { map } from "../../../utils/fp";

const Container = styled.section`
  background: white;
  display: flex;
  padding: 2em;
  justify-content: center;
`;

const List = styled.ol`
  display: flex;
  max-width: 1024px;
`;

const Panel = styled.li`
  list-style: none;
  flex: 0.25;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h3``;

const Body = styled.p``;

const Image = styled.img`
  margin: 0 auto;
  width: 50%;
`;

const content = [
  {
    image: "/static/how-it-works/1.gif",
    title: "Set up a profile",
    body: "Both researchers and visualisers make a profile in a few easy steps"
  },
  {
    image: "/static/how-it-works/2.gif",
    title: "Get together",
    body:
      "Browse through projects and apply or find an artist for your research project"
  },
  {
    image: "/static/how-it-works/3.gif",
    title: "Agree on the details",
    body: "Deadlines, scope and payment are agreed on"
  },
  {
    image: "/static/how-it-works/4.gif",
    title: "Deliver",
    body:
      "The visualisations are delivered and free to use in research publishing - and a new connection has been made!"
  }
];

const ListItem = ({ image, title, body }) => (
  <Panel>
    <Image src={image} />
    <Title>{title}</Title>
    <Body>{body}</Body>
  </Panel>
);

const HowItWorks = () => (
  <Container>
    <List>{map(ListItem, content)}</List>
  </Container>
);

export default HowItWorks;
