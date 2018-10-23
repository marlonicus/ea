import Link from "../../link";
import styled from 'styled-components';

const Root = styled.div`
  color: white;
`;

const NavButton = ({ to, text }) => (
  <Link href={to} as={Root}>
    { text }
  </Link>
);

export default NavButton;
