require("dotenv").config();

const { prop } = require("ramda");
const { MongoClient } = require("mongodb");

// Connection URL
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
  process.env.DB_HOST
}/${process.env.DB_NAME}`;

const status = {
  connected: false,
  db: undefined,
  client: undefined
};

const init = async () => {
  const client = await MongoClient.connect(
    url,
    { useNewUrlParser: true }
  );

  const db = client.db(process.env.DB_NAME);

  status.connected = true;
  status.db = db;
  status.client = client;
};

module.exports = {
  init,
  db: () => prop("db", status),
  client: () => prop("client", status)
};
