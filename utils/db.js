require("dotenv").config();

const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");

// Connection URL
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
  process.env.DB_HOST
}/${process.env.DB_NAME}`;

module.exports = {
  connect: async () => {
    const client = await MongoClient.connect(
      url,
      { useNewUrlParser: true }
    );
    const db = client.db(process.env.DB_NAME);
    console.log("Connected successfully to server");
    return { client, db };
  },

  hashPassword: password =>
    new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          resolve({ hash, salt });
        });
      });
    })
};
