const Router = require("koa-router");
const jobs = require("./routes/jobs");
const scientists = require("./routes/scientists");

module.exports = ({ app }) => {
  const router = new Router();
  const handle = app.getRequestHandler();

  router.post("/api/jobs", async ctx => {
    ctx.body = await jobs.post({ ctx });
  });

  router.get("/api/jobs", async ctx => {
    ctx.body = await jobs.get();
  });

  router.get("/api/scientists", async ctx => {
    ctx.body = await scientists.get();
  });

  router.get("*", async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  return router.routes();
};
