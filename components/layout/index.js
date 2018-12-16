import React from "react";
import { globalStyle, createGlobalStyle } from "@smooth-ui/core-sc";
import HeaderContainer from "../../containers/header";
import { ModalsProvider, Modals } from "../../containers/modals";

const GlobalStyle = createGlobalStyle`
  ${globalStyle()}

  #__next {
    background: white;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: visible;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

const Layout = ({ children }) => (
  <ModalsProvider>
    <GlobalStyle />
    <HeaderContainer />
    <Modals />
    {children}
  </ModalsProvider>
);

export default Layout;
