import React from "react";
import styled from "styled-components";

import Link from "next/link";

const Container = styled.section`
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  background: #393939;
  width: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 1rem;
`;

const StyledLink = styled.a`
  color: #bddafd;
  background: transparent;
  cursor: pointer;
  border: none;
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;

  :hover {
    color: #fff;
  }
`;

const NavLink = ({ children, ...props }) => (
  <NavListItem>
    <Link prefetch passHref {...props}>
      <StyledLink>{children}</StyledLink>
    </Link>
  </NavListItem>
);

const Image = styled.img`
  padding: 4rem 0;
  width: 300px;
`;

const JobsHero = () => (
  <Container>
    <Image src="/static/jobs-hero.gif" />
    <NavList>
      <NavLink href="/jobs">Open Jobs</NavLink>
      <NavLink href="/jobs/archive">Archive</NavLink>
    </NavList>
  </Container>
);

export default JobsHero;
