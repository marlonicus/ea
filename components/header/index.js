import React from "react";
import { Box } from "@smooth-ui/core-sc";
import Logo from "../logo";
import NavButton from "./nav-button";

const Header = ({ onLoginClick, onJoinClick, isLoggedIn }) => (
  <Box
    as="header"
    display="flex"
    justifyContent="space-between"
    backgroundColor="#ccc"
  >
    <Logo />

    <Box display="flex">
      <NavButton to="/scientists" text="Scientists" />
      <NavButton to="/artists" text="Artists" />
      <NavButton to="/jobs" text="Jobs" />
      <NavButton to="/about" text="About" />
    </Box>

    {isLoggedIn === "unknown" && <p>Loading</p>}

    {isLoggedIn === false && <p>Logged in!</p>}

    {isLoggedIn === true && (
      <Box display="flex">
        <NavButton onClick={onLoginClick} text="Sign in" />
        <NavButton onClick={onJoinClick} text="Create profile" />
      </Box>
    )}
  </Box>
);

export default Header;
