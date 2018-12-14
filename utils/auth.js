const Amplify = require("aws-amplify").default;
const env = require("./env");

const { Auth } = Amplify;

console.log("FOO", env)

if (typeof window !== "undefined") {
  Amplify.configure({
    Auth: {
      region: env("AWS_COGNITO_REGION"),
      userPoolId: env("AWS_COGNITO_POOL_ID"),
      userPoolWebClientId: env("AWS_COGNITO_APP_CLIENT_ID")
    }
  });
}

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
