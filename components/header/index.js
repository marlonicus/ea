import React from "react";
import { Box } from "@smooth-ui/core-sc";
import Logo from "../logo";
import NavButton from "./nav-button";
import { ModalsConsumer } from "../modals";

const Header = () => (
  <ModalsConsumer>
    {({ showModal }) => (
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

        <Box display="flex">
          <NavButton onClick={() => showModal("login")} text="Sign in" />
          <NavButton onClick={() => showModal("join")} text="Create profile" />
        </Box>
      </Box>
    )}
  </ModalsConsumer>
);

export default Header;
