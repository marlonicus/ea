import React from "react";
import { withStateHandlers } from "recompose";
import styled from "styled-components";
import JoinContainer from "../../containers/join";
import LoginContainer from "../../containers/login";

const ModalsContext = React.createContext();

const enhance = withStateHandlers(
  { currentModal: false },
  {
    showModal: () => type => ({
      currentModal: type
    }),
    hideModal: () => () => ({
      currentModal: false
    })
  }
);

export const ModalsProvider = enhance(
  ({ currentModal, showModal, hideModal, children }) => (
    <ModalsContext.Provider value={{ currentModal, showModal, hideModal }}>
      {children}
    </ModalsContext.Provider>
  )
);

export const ModalsConsumer = ModalsContext.Consumer;

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: visible;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modals = () => (
  <ModalsConsumer>
    {({ hideModal, currentModal }) =>
      currentModal ? (
        <Root onClick={hideModal}>
          {currentModal === "join" && <JoinContainer />}
          {currentModal === "login" && <LoginContainer />}
        </Root>
      ) : null
    }
  </ModalsConsumer>
);
