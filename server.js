/* eslint-disable no-console */

if (process.env.NODE_ENV !== "production") {
  require("now-env"); // eslint-disable-line global-require
}

require("isomorphic-fetch");

const Koa = require("koa");
const koaBodyParser = require("koa-bodyparser");
const next = require("next");
const { init: databaseConnect } = require("./utils/db");
const router = require("./server/router");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

(async () => {
  await databaseConnect();

  app.prepare().then(() => {
    const server = new Koa();
    server.use(koaBodyParser());
    server.use(router({ app }));
    server.use(async (ctx, nextFn) => {
      ctx.res.statusCode = 200;
      await nextFn();
    });
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
})();
