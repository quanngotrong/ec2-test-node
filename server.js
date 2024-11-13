const http = require("http");
const os = require("os");

const hostname = os.hostname(); // Get the hostname of the current machine

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Route handling
  if (req.url === "/order/get-hostname") {
    res.writeHead(200);
    res.end(JSON.stringify({ hostname }));
  } else if (req.url === "/analytic/get-hostname") {
    res.writeHead(200);
    res.end(JSON.stringify({ hostname }));
  } else if (req.url === "/health-check") {
    res.writeHead(200);
    res.end(JSON.stringify({ success: true }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
