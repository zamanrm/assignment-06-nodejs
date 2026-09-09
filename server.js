const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  // Home Route
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  }

  // Blog Route
  else if (req.url === "/blog") {
    res.end("<h1>Blog Page</h1>");
  }

  // Contact Route
  else if (req.url === "/contact") {
    res.end("<h1>Contact Page</h1>");
  }

  // About Route
  else if (req.url === "/about") {
    res.end("<h1>About Page</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});