const jwt = require("jsonwebtoken");
const jwkToPem = require("jwk-to-pem");
const jwk = require("../jwks.json");

const pem = jwkToPem(jwk.keys[0]);

module.exports = {
  verify: async ({ token, validator }) =>
    new Promise((resolve, reject) => {
      jwt.verify(token, pem, { algorithms: ["RS256"] }, (err, decodedToken) => {
        if (err || !validator(decodedToken)) {
          return reject(err);
        }

        return resolve(decodedToken);
      });
    })
};
