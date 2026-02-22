const next = require("next");
const http = require("http");

const port = parseInt(process.env.PORT || "3003", 10);
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => handle(req, res))
    .listen(port, (err) => {
      if (err) throw err;
      console.log(`Next.js server running at http://localhost:${port} (dev=${dev})`);
    });
});
