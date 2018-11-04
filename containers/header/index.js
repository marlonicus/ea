import React from "react";
import { connect } from "react-redux";
import { identity } from "ramda";
import Header from "../../components/header";
import { ModalsConsumer } from "../../components/modals";

const HeaderContainer = ({ isLoggedIn }) => (
  <ModalsConsumer>
    {({ showModal }) => (
      <Header
        onLoginClick={() => showModal("login")}
        onJoinClick={() => showModal("join")}
        isLoggedIn={isLoggedIn}
      />
    )}
  </ModalsConsumer>
);

export default connect(identity)(HeaderContainer);
