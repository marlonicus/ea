const AWS = require("aws-sdk");
const { map, filter, prop, pipe, contains, propEq, unnest } = require("ramda");

AWS.config = new AWS.Config({
  accessKeyId: process.env.EA_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.EA_AWS_ACCESS_SECRET,
  region: process.env.AWS_COGNITO_REGION
});

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const transformCognitoUsers = type =>
  pipe(
    prop("Users"),
    map(prop("Attributes")),

    filter(
      contains({
        Name: "custom:role",
        Value: type /* @TODO: Type check this for scientist or artist only */
      })
    ),

    // Only need their names
    map(filter(propEq("Name", "name"))),
    unnest,
    map(x => ({ name: x.Value }))
  );

module.exports = {
  get: async ({ type }) =>
    new Promise((resolve, reject) => {
      const params = {
        UserPoolId: process.env.AWS_COGNITO_POOL_ID
      };
      cognitoidentityserviceprovider.listUsers(params, (err, data) => {
        if (err) {
          console.error(err, err.stack);
          reject(err);
        } else {
          resolve(transformCognitoUsers(type)(data));
        }
      });
    })
};
