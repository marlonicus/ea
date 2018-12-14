import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    /* eslint-disable react/no-danger */
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.env = {
                AWS_COGNITO_APP_CLIENT_ID: "${
                  process.env.AWS_COGNITO_APP_CLIENT_ID
                }",
                AWS_COGNITO_POOL_ID: "${process.env.AWS_COGNITO_POOL_ID}",
                AWS_COGNITO_REGION: "${process.env.AWS_COGNITO_REGION}",
                API_HOST: "${process.env.API_HOST}"
              };
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
