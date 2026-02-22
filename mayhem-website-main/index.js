const next = require('next');
const http = require('http');

const port = 5497;
const dev = true; // Set to false for production
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`Next.js server running at http://localhost:${port}`);
  });
});