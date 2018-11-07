require("now-env");

const { init, db, client } = require("../../utils/db");

(async () => {
  await init();
  await db().createCollection("jobs");
  client().close();
})();
