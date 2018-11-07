/* eslint-disable no-console */

require("isomorphic-fetch");
require("now-env");

const fs = require("fs");

const jwkUrl = `https://cognito-idp.${
  process.env.AWS_COGNITO_REGION
}.amazonaws.com/${process.env.AWS_COGNITO_POOL_ID}/.well-known/jwks.json`;

(async () => {
  console.log(`Fetching ${jwkUrl}`);
  const res = await fetch(jwkUrl);
  const json = await res.json();

  fs.writeFileSync("jwks.json", JSON.stringify(json, null, 2));
  console.log("JWK's written to jwks.json");
})();
