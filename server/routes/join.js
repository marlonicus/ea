const Amplify = require("aws-amplify").default;

const { Auth } = Amplify;

Amplify.configure({
  Auth: {
    region: process.env.AWS_COGNITO_REGION,
    userPoolId: process.env.AWS_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.AWS_COGNITO_APP_CLIENT_ID
  }
});

const create = async ctx => {
  const { name, password, email, role } = ctx.request.body;

  const data = await Auth.signUp({
    username: email,
    password,
    attributes: {
      name,
      "custom:role": role
    }
  });

  console.log("data:", data);

  ctx.body = data;
};

const confirm = async ctx => {
  const data = await Auth.confirmSignUp(
    ctx.params.username,
    ctx.params.verificationcode
  );

  ctx.body = data;
};

module.exports = { create, confirm };
