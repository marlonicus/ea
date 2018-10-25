const Router = require("koa-router");
const { connect, hashPassword } = require("../utils/db");

module.exports = ({ app }) => {
  const router = new Router();
  const handle = app.getRequestHandler();

  router.post("/api/join", async ctx => {
    const { db } = await connect();
    const { name, password, email, role } = ctx.request.body;
    const { hash, salt } = await hashPassword(password);

    // Add the user to the db, and recieve their unique id
    await db
      .collection("users")
      .insertOne({ name, email, role, password: hash, salt });

    ctx.body = { success: true };
  });

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
