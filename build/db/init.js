require("dotenv").config();

const assert = require("assert");
const { connect } = require("../../utils/db");

connect(({ client, db }) => {
  db.createCollection("users", err => {
    assert.equal(null, err);
    console.log("users collection created");
    client.close();
  });
});
