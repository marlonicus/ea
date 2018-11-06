require("dotenv").config();

const { init, db, client } = require("../../utils/db");

(async () => {
  await init();
  await db().createCollection("jobs");
  client().close();
})();
