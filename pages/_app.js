import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withReduxStore from "../components/with-redux-store";
import PageContainer from "../containers/page";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <PageContainer>
            <Component {...pageProps} />
          </PageContainer>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
