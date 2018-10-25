import React from "react";
import styled from "styled-components";
import Link from "../../link";

const Root = styled.div`
  color: white;
`;

const NavButton = ({ to, onClick, text }) => (
  <Link href={to} onClick={onClick} as={Root}>
    {text}
  </Link>
);

export default NavButton;
