const Amplify = require("aws-amplify").default;

const { Auth } = Amplify;

Amplify.configure({
  Auth: {
    region: process.env.AWS_COGNITO_REGION,
    userPoolId: process.env.AWS_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.AWS_COGNITO_APP_CLIENT_ID
  }
});

module.exports = {
  signUp: ({ username, password, role, name }) =>
    Auth.signUp({
      username,
      password,
      attributes: {
        name,
        "custom:role": role
      }
    }),

  signIn: ({ username, password }) => Auth.signIn(username, password),

  signOut: () => Auth.signOut()
};
