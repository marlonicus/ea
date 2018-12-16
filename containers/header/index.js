import React from "react";
import { connect } from "react-redux";
import { identity } from "ramda";
import { signOut } from "../../utils/auth";
import Header from "../../components/header";
import { ModalsConsumer } from "../modals";

const HeaderContainer = ({ isLoggedIn }) => (
  <ModalsConsumer>
    {({ showModal }) => (
      <Header
        onLoginClick={() => showModal("login")}
        onJoinClick={() => showModal("join")}
        onLogoutClick={signOut}
        isLoggedIn={isLoggedIn}
      />
    )}
  </ModalsConsumer>
);

export default connect(identity)(HeaderContainer);
