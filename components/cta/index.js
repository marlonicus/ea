import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  padding: 1em 2em;
  cursor: pointer;
  border: 1px solid black;
  display: inline-block;
  text-align: center;

  :hover {
    background: #ccc;
  }
`;

const CTA = ({ children, ...props }) => (
  <Link prefetch {...props}>
    <StyledLink>{children}</StyledLink>
  </Link>
);

export default CTA;
