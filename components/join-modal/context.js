import React from "react";
import { bind } from "ramda";

const JoinModalContext = React.createContext();

export class JoinModalProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      showJoinModal: bind(this.showJoinModal, this),
      hideJoinModal: bind(this.hideJoinModal, this)
    };
  }

  showJoinModal() {
    this.setState({
      isShown: true
    });
  }

  hideJoinModal() {
    this.setState({
      isShown: false
    });
  }

  render() {
    const { isShown, showJoinModal, hideJoinModal } = this.state;
    const { children } = this.props;

    return (
      <JoinModalContext.Provider
        value={{ isShown, showJoinModal, hideJoinModal }}
      >
        {children}
      </JoinModalContext.Provider>
    );
  }
}

export const JoinModalConsumer = JoinModalContext.Consumer;
