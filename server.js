const Koa = require("koa");
const koaBodyParser = require("koa-bodyparser");
const next = require("next");
const router = require("./server/router");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

app.prepare().then(() => {
  const server = new Koa();
  server.use(koaBodyParser());
  server.use(router({ app }));
  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
