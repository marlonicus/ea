const Router = require("koa-router");
const { connect } = require("../utils/db");

module.exports = ({ app }) => {
  const router = new Router();
  const handle = app.getRequestHandler();

  router.get("/create", async ctx => {
    const { client, db } = await connect();
    await db.collection("users").insert({ foo: "bar" });
    await app.render(ctx.req, ctx.res, "/about", ctx.query);
    ctx.respond = false;
  });

  router.get("/a", async ctx => {
    await app.render(ctx.req, ctx.res, "/b", ctx.query);
    ctx.respond = false;
  });

  router.get("/b", async ctx => {
    await app.render(ctx.req, ctx.res, "/a", ctx.query);
    ctx.respond = false;
  });

  router.get("*", async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  return router.routes();
};
