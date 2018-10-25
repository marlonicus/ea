import React from "react";
import styled from "styled-components";
import Logo from "../logo";
import NavButton from "./nav-button";
import { JoinModalConsumer } from "../join-modal/context";

const Root = styled.header`
  background: #ccc;
  color: #333;
  font-weight: 900;
  ÷height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Group = styled.div`
  display: flex;
`;

const Header = () => (
  <JoinModalConsumer>
    {({ showJoinModal }) => (
      <Root>
        <Logo />
        <Group>
          <NavButton to="/scientists" text="Scientists" />
          <NavButton to="/artists" text="Artists" />
          <NavButton to="/jobs" text="Jobs" />
          <NavButton to="/about" text="About" />
        </Group>

        <Group>
          <NavButton to="/login" text="Sign in" />
          <NavButton onClick={showJoinModal} text="Create profile" />
        </Group>
      </Root>
    )}
  </JoinModalConsumer>
);

export default Header;
