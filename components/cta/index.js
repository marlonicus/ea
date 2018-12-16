import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  padding: 1em ${({ padding }) => (padding ? "1.5em" : "0")};
  cursor: pointer;
  border: 1px solid black;
  display: inline-block;
  text-align: center;
  text-decoration: none;

  :hover {
    background: #ccc;
  }
`;

const CTA = ({ children, padding, ...props }) => (
  <Link scroll prefetch passHref {...props}>
    <StyledLink padding={padding}>{children}</StyledLink>
  </Link>
);

export default CTA;
