import React from "react";
import { globalStyle, createGlobalStyle } from "@smooth-ui/core-sc";
import HeaderContainer from "../../containers/header";
import { ModalsProvider, Modals } from "../modals";

const GlobalStyle = createGlobalStyle`${globalStyle()}`;

const Layout = ({ children }) => (
  <ModalsProvider>
    <GlobalStyle />
    <HeaderContainer />
    <Modals />
    {children}
  </ModalsProvider>
);

export default Layout;
