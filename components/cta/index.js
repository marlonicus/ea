import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  padding: 1em 3em;
  cursor: pointer;
  border: 1px solid black;

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
