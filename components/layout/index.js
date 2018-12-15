import React from "react";
import { globalStyle, createGlobalStyle } from "@smooth-ui/core-sc";
import HeaderContainer from "../../containers/header";
import { ModalsProvider, Modals } from "../modals";

const GlobalStyle = createGlobalStyle`
  ${globalStyle()}
  
  #__next {
    background: white;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
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
