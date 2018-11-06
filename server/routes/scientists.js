const AWS = require("aws-sdk");
const { map, filter, prop, pipe, contains, propEq, unnest } = require("ramda");

AWS.config = new AWS.Config({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_SECRET,
  region: process.env.AWS_COGNITO_REGION
});

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const transformCognitoUsers = pipe(
  prop("Users"),
  map(prop("Attributes")),

  // only get scientists
  filter(
    contains({
      Name: "custom:role",
      Value: "scientist"
    })
  ),

  // Only need their names
  map(filter(propEq("Name", "name"))),
  unnest,
  map(prop("Value"))
);

module.exports = {
  get: async () =>
    new Promise((resolve, reject) => {
      const params = {
        UserPoolId: process.env.AWS_COGNITO_POOL_ID
      };
      cognitoidentityserviceprovider.listUsers(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
          reject(err);
        } else {
          resolve(transformCognitoUsers(data));
        }
      });
    })
};
