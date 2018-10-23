import styled from 'styled-components';
import Logo from "../logo";
import NavButton from "./nav-button";

const Root = styled.header`
  background: #333;
  color: white;
  height: 40px;
  display: flex;
`;

const Header = () => (
  <Root>
    <Logo />
    <NavButton to="/scientists" text="Scientists" />
    <NavButton to="/artists" text="Artists" />
    <NavButton to="/jobs" text="Jobs" />
    <NavButton to="/about" text="About" />
  </Root>
);

export default Header;
