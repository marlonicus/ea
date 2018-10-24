import Link from "../../link";
import styled from 'styled-components';

const Root = styled.div`
  color: white;
`;

const NavButton = ({ to, onClick, text }) => (
  <Link href={to} onClick={onClick} as={Root}>
    { text }
  </Link>
);

export default NavButton;
