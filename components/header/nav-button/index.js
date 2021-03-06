import React from "react";
import styled from "styled-components";
import Link from "next/link";

const styles = `
  color: #333;
  background: transparent;
  cursor: pointer;
  border: none;
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;

  :hover {
    color: #111;
  }
`;

const StyledLink = styled.a`
  ${styles};
`;

const StyledButton = styled.button`
  ${styles};
`;

const NavButton = ({ onClick, children, ...props }) =>
  onClick ? (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  ) : (
    <Link prefetch scroll passHref {...props}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );

export default NavButton;
