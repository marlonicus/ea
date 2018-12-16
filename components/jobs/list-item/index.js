import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Item = styled.li`
  width: 100%;
  background: #e9f3fe;
  position: relative;
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

const StyledLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-indent: -999px;
`;

const OverlayLink = ({ children, ...props }) => (
  <Link prefetch scroll passHref {...props}>
    <StyledLink>{children}</StyledLink>
  </Link>
);

const Body = styled.p``;

const JobsListItem = ({ title, description, _id }) => (
  <Item key={_id}>
    <OverlayLink href={`/jobs/open/${_id}`}>{title}</OverlayLink>

    <Content>
      <Title>{title}</Title>
      <Body>{description}</Body>
    </Content>
  </Item>
);

export default JobsListItem;
