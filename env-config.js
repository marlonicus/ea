/**
  This file will expose environment variables to the client.

  ...Try not to expose the wrong things :)
*/

require("dotenv").config();
const { reduce } = require("ramda");

const envVars = [
  "AWS_COGNITO_APP_CLIENT_ID",
  "AWS_COGNITO_POOL_ID",
  "AWS_COGNITO_REGION"
];

module.exports = reduce(
  (prev, curr) => ({
    ...prev,
    [`process.env.${curr}`]: process.env[curr]
  }),
  {}
)(envVars);
