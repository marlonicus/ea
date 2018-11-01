const Router = require("koa-router");

module.exports = ({ app }) => {
  const router = new Router();
  const handle = app.getRequestHandler();

  router.get("/create-job", async ctx => {
    await app.render(ctx.req, ctx.res, "/create-job", ctx.query);
    ctx.respond = false;
  });

  router.get("*", async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  return router.routes();
};
