import React from "react";
import { globalStyle, createGlobalStyle } from "@smooth-ui/core-sc";
import Header from "../header";
import { ModalsProvider, Modals } from "../modals";

const GlobalStyle = createGlobalStyle`${globalStyle()}`;

const Layout = ({ children }) => (
  <ModalsProvider>
    <GlobalStyle />
    <Header />
    <Modals />
    {children}
  </ModalsProvider>
);

export default Layout;
