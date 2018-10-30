import React from "react";
import GlobalStyles from "../global-styles";
import Header from "../header";
import { ModalsProvider, Modals } from "../modals";

const Layout = ({ children }) => (
  <ModalsProvider>
    <GlobalStyles />
    <Header />
    <Modals />
    {children}
  </ModalsProvider>
);

export default Layout;
