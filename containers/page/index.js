import React from "react";
import { Auth, Hub, Logger } from "aws-amplify";
import { connect } from "react-redux";
import { identity } from "ramda";

class PageContainer extends React.Component {
  constructor(props) {
    super(props);

    const headerLogger = new Logger("Header");

    headerLogger.onHubCapsule = capsule => {
      switch (capsule.payload.event) {
        case "signIn":
        case "signOut":
          this.setLoginState();
          break;

        default:
      }
    };

    Hub.listen("auth", headerLogger);
    this.setLoginState();
  }

  async setLoginState() {
    const { dispatch } = this.props;
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      dispatch({
        type: "LOGGED_IN",
        payload: currentUser
      });
    } catch (e) {
      dispatch({
        type: "LOGGED_OUT"
      });
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default connect(identity)(PageContainer);
