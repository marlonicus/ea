import React from "react";
import { bind } from "ramda";

const JoinModalContext = React.createContext();

export class JoinModalProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnabled: false,
      showLogin: bind(this.showLogin, this),
      hideLogin: bind(this.hideLogin, this)
    };
  }

  showLogin() {
    this.setState({
      isEnabled: true
    });
  }

  hideLogin() {
    this.setState({
      isEnabled: false
    });
  }

  render() {
    const { isEnabled, showLogin, hideLogin } = this.state;
    const { children } = this.props;

    return (
      <JoinModalContext.Provider value={{ isEnabled, showLogin, hideLogin }}>
        {children}
      </JoinModalContext.Provider>
    );
  }
}

export const JoinModalConsumer = JoinModalContext.Consumer;
