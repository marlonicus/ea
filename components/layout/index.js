import React from "react";
import GlobalStyles from "../global-styles";
import Header from "../header";
import JoinModal from "../join-modal";
import { JoinModalProvider } from "../join-modal/context";

const Layout = ({ children }) => (
  <JoinModalProvider>
    <GlobalStyles />
    <Header />
    <JoinModal />
    {children}
  </JoinModalProvider>
);

export default Layout;
