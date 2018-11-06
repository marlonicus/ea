const { pathOr } = require("ramda");
const jwt = require("jsonwebtoken");
const jwkToPem = require("jwk-to-pem");
const jwk = require("../jwks.json");

const pem = jwkToPem(jwk.keys[0]);
const getTokenFromCtx = pathOr("", ["request", "header", "x-ea-auth"]);

const verify = async ({ token, validator }) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, pem, { algorithms: ["RS256"] }, (err, decodedToken) => {
      if (err || !validator(decodedToken)) {
        return reject(err);
      }

      return resolve(decodedToken);
    });
  });

const verifyIsScientist = async ({ ctx }) => {
  const validator = ({ "custom:role": role }) => role === "scientist";
  const token = getTokenFromCtx(ctx);
  return verify({ token, validator });
};

module.exports = {
  verify,
  verifyIsScientist
};
