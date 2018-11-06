import React from "react";
import { Box } from "@smooth-ui/core-sc";
import Logo from "../logo";
import NavButton from "./nav-button";

const Header = ({ onLoginClick, onJoinClick, onLogoutClick, isLoggedIn }) => (
  <Box
    as="header"
    display="flex"
    justifyContent="space-between"
    borderBottom="black"
  >
    <Logo />

    <Box display="flex">
      <NavButton to="/scientists" text="Scientists" />
      <NavButton to="/artists" text="Artists" />
      <NavButton to="/jobs" text="Jobs" />
      <NavButton to="/about" text="About" />
    </Box>

    {isLoggedIn === "unknown" && <p>Loading</p>}

    {isLoggedIn === true && (
      <NavButton onClick={onLogoutClick} text="Sign out" />
    )}

    {isLoggedIn === false && (
      <Box display="flex">
        <NavButton onClick={onLoginClick} text="Sign in" />
        <NavButton onClick={onJoinClick} text="Create profile" />
      </Box>
    )}
  </Box>
);

export default Header;
