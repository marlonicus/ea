import React from "react";
import styled from "styled-components";
import Logo from "../logo";
import NavButton from "./nav-button";
import { JoinModalConsumer } from "../join-modal/context";

const Root = styled.header`
  background: #333;
  color: white;
  height: 40px;
  display: flex;
`;

const Header = () => (
  <JoinModalConsumer>
    {({ showLogin }) => (
      <Root>
        <Logo />
        <NavButton to="/scientists" text="Scientists" />
        <NavButton to="/artists" text="Artists" />
        <NavButton to="/jobs" text="Jobs" />
        <NavButton to="/about" text="About" />

        <NavButton to="/login" text="Sign in" />
        <NavButton onClick={showLogin} text="Create profile" />
      </Root>
    )}
  </JoinModalConsumer>
);

export default Header;
