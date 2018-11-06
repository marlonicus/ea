const Router = require("koa-router");
const { connect } = require("../utils/db");

module.exports = ({ app }) => {
  const router = new Router();
  const handle = app.getRequestHandler();

  router.post("/api/jobs", async ctx => {
    const { title, description } = ctx.request.body;
    const { db } = await connect();
    await db.collection("jobs").insertOne({ title, description });
    ctx.body = "Job posted";
  });

  router.get("/api/jobs", async ctx => {
    const { db } = await connect();
    console.log(db);
    const res = await db
      .collection("jobs")
      .find()
      .toArray();
    ctx.body = res;
  });

  router.get("*", async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  return router.routes();
};
