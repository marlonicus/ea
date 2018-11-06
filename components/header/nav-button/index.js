import React from "react";
import { Button } from "@smooth-ui/core-sc";
import Link from "../../link";
import { withProps } from "recompose";

const NavButton = ({ to, onClick, text }) => (
  <Link href={to} onClick={onClick} as={Button}>
    {text}
  </Link>
);

export default NavButton;
