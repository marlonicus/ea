const Router = require("koa-router");
const { pathOr } = require("ramda");
const { connect } = require("../utils/db");
const { verify } = require("../utils/jwt");

module.exports = ({ app }) => {
  const router = new Router();
  const handle = app.getRequestHandler();

  router.post("/api/jobs", async ctx => {
    const validator = ({ "custom:role": role }) => role === "scientist";
    const token = pathOr("", ["request", "header", "x-ea-auth"], ctx);
    try {
      await verify({ token, validator });
      const { title, description } = ctx.request.body;
      const { db } = await connect();
      await db.collection("jobs").insertOne({ title, description });
      ctx.body = "Job posted";
    } catch (e) {
      ctx.body = "Fail";
    }
  });

  router.get("/api/jobs", async ctx => {
    const { db } = await connect();
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
