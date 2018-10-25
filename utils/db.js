require("dotenv").config();

const { MongoClient } = require("mongodb");
const assert = require("assert");

// Connection URL
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
  process.env.DB_HOST
}/${process.env.DB_NAME}`;

module.exports = {
  connect: callback => {
    MongoClient.connect(
      url,
      { useNewUrlParser: true },
      (err, client) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(process.env.DB_NAME);
        callback({ client, db });
      }
    );
  }
};
