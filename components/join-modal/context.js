import React from "react";

const JoinModalContext = React.createContext();

export class JoinModalProvider extends React.Component {
  showLogin = () => {
    this.setState({
      isEnabled: true
    })
  }

  hideLogin = () => {
    this.setState({
      isEnabled: false
    })
  }

  state = {
    isEnabled: false,
    showLogin: this.showLogin,
    hideLogin: this.hideLogin
  }

  render() {
    return (
      <JoinModalContext.Provider value={this.state}>
        { this.props.children }
      </JoinModalContext.Provider>
    )
  }
}

export const JoinModalConsumer = JoinModalContext.Consumer;
