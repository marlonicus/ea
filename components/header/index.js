import React from "react";
import { Box } from "@smooth-ui/core-sc";
import styled from "styled-components";
import Logo from "../logo";
import NavButton from "./nav-button";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  background: black;
`;

const Header = ({ onLoginClick, onJoinClick, onLogoutClick, isLoggedIn }) => (
  <Container>
    <Logo />

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
