const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  // Navigation Links
  const navigation = `
    <nav>
      <a href="/">Home</a> |
      <a href="/blog">Blog</a> |
      <a href="/contact">Contact</a> |
      <a href="/about">About</a>
    </nav>
    <hr>
  `;

  // 1. Home Route
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
      ${navigation}

      <h1>Home Page</h1>
      <p>Welcome to our Home Page.</p>
      <p>This is a simple HTTP server built with Node.js.</p>
    `);
  }

  // 2. Blog Route
  else if (req.url === "/blog") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
      ${navigation}

      <h1>Blog Page</h1>
      <p>Welcome to our Blog Page.</p>
      <p>Here you can find our latest articles and updates.</p>
    `);
  }

  // 3. Contact Route
  else if (req.url === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
      ${navigation}

      <h1>Contact Page</h1>
      <p>Welcome to our Contact Page.</p>
      <p>You can contact us for any questions or information.</p>
    `);
  }

  // 4. About Route
  else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
      ${navigation}

      <h1>About Page</h1>
      <p>Welcome to our About Page.</p>
      <p>Learn more about this simple Node.js project.</p>
    `);
  }

  // 5. Invalid Route - 404
  else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });

    res.end(`
      ${navigation}

      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Go to Home Page</a>
    `);
  }
});

// Start Server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});