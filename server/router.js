const Router = require("koa-router");
const jobs = require("./routes/jobs");
const profiles = require("./routes/profiles");

module.exports = ({ app }) => {
  const router = new Router();
  const handle = app.getRequestHandler();

  router.get("/api/jobs/:id", async ctx => {
    ctx.body = await jobs.getById({ id: ctx.params.id });
  });

  router.post("/api/jobs", async ctx => {
    ctx.body = await jobs.post({ ctx });
  });

  router.get("/api/jobs", async ctx => {
    ctx.body = await jobs.get();
  });

  router.get("/api/profiles/:type", async ctx => {
    ctx.body = await profiles.get({ type: ctx.params.type });
  });

  router.get("/jobs/open/:id", async ctx => {
    await app.render(ctx.req, ctx.res, "/jobs/open/_id", ctx.params);
    ctx.respond = false;
  });

  router.get("*", async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  return router.routes();
};
