import React from "react";
import styled from "styled-components";

const Item = styled.li`
  width: 100%;
  background: #e9f3fe;
  list-style: none;
  margin: 0;
  margin-bottom: 1em;
  display: flex;
  align-items: start;

  :before {
    content: "OPEN!";
    display: block;
    width: 150px;
    height: 150px;
    background: #bddafc;
    text-align: center;
    color: white;
    font-weight: bold;
    line-height: 150px;
    vertical-align: middle;
  }
`;

const Content = styled.div`
  padding: 1em;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
`;

const Body = styled.p``;

const JobsListItem = ({ title, description }, index) => (
  <Item key={index}>
    <Content>
      <Title>{title}</Title>
      <Body>{description}</Body>
    </Content>
  </Item>
);

export default JobsListItem;
