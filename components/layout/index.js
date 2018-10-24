import GlobalStyles from "../global-styles";
import Header from "../header";
import JoinModal from "../join-modal";
import { JoinModalProvider } from "../join-modal/context";
import React from "react";

class Layout extends React.Component {
  render () {
    return (
      <JoinModalProvider>
        <GlobalStyles />
        <Header />
        <JoinModal />
        { this.props.children }
      </JoinModalProvider>
    )
  }
}

export default Layout;
