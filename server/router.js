const Router = require("koa-router");
const join = require("./routes/join");

module.exports = ({ app }) => {
  const router = new Router();
  const handle = app.getRequestHandler();

  router.post("/join", join.create);
  router.get("/join-confirm/:username/:verificationcode", join.confirm);

  router.get("/create", async ctx => {
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
