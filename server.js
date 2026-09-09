const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end("<h1>HTTP Server is Running</h1>");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});