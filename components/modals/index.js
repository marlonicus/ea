import React from "react";
import { withStateHandlers, renameProp } from "recompose";
import {
  Modal,
  ModalDialog,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton
} from "@smooth-ui/core-sc";
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

const ModalTypes = {
  join: {
    Body: JoinContainer,
    title: "We just need to know a few things first..."
  },

  login: {
    Body: renameProp("hideModal", "successHandler")(LoginContainer),
    title: "Welcome!"
  }
};

export const Modals = () => (
  <ModalsConsumer>
    {({ hideModal, currentModal }) => {
      const PickedModal = ModalTypes[currentModal];

      return currentModal ? (
        <Modal opened onClose={hideModal}>
          <ModalDialog>
            <ModalContent>
              <ModalHeader>{PickedModal.title}</ModalHeader>
              <ModalBody>
                <PickedModal.Body hideModal={hideModal} />
              </ModalBody>
              <ModalCloseButton />
            </ModalContent>
          </ModalDialog>
        </Modal>
      ) : null;
    }}
  </ModalsConsumer>
);
