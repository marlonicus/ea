import React from "react";
import { Box } from "@smooth-ui/core-sc";
import styled from "styled-components";
import Link from "next/link";
import Logo from "../logo";
import NavButton from "./nav-button";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #b1b1b1;
  padding-right: 1em;
`;

const LogoLink = styled.a`
  cursor: pointer;
`;

const Header = ({ onLoginClick, onJoinClick, onLogoutClick, isLoggedIn }) => (
  <Container>
    <Link prefetch passHref href="/">
      <LogoLink>
        <Logo />
      </LogoLink>
    </Link>

    <Box display="flex">
      <NavButton href="/scientists">Scientists</NavButton>
      <NavButton href="/artists">Artists</NavButton>
      <NavButton href="/jobs">Jobs</NavButton>
      <NavButton href="/about">About</NavButton>
    </Box>

    {isLoggedIn === "unknown" && <p>Loading</p>}

    {isLoggedIn === true && (
      <NavButton onClick={onLogoutClick}>Sign out</NavButton>
    )}

    {isLoggedIn === false && (
      <Box display="flex">
        <NavButton onClick={onLoginClick}>Sign in</NavButton>
        <NavButton onClick={onJoinClick}>Create profile</NavButton>
      </Box>
    )}
  </Container>
);

export default Header;
