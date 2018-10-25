import React from "react";
import Router from "next/router";

const Link = ({
  as: Root,
  href = false,
  children,
  onClick = () => {
    console.log("hey");
  }
}) => (
  <Root onClick={() => (href ? Router.push(href) : onClick())}>{children}</Root>
);

export default Link;
