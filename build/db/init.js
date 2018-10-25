require("dotenv").config();

const { connect } = require("../../utils/db");

(async () => {
  const { client, db } = await connect();
  await db.createCollection("users");
  client.close();
})();
