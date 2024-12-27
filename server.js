const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

// Set the target server (this is where you want to proxy your requests)
const targetServer = 'https://example-proxy-server.com'; // Replace this with CroxyProxy or your private server URL

// Serve the static files
app.use(express.static("public"));

// Proxy requests
app.use("/proxy", createProxyMiddleware({
  target: targetServer,
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '', // Remove '/proxy' from the URL path
  },
  onProxyReq: (proxyReq, req, res) => {
    // You can modify the request here if needed, for example, add headers
    console.log(`Proxying request to: ${targetServer}${req.url}`);
  },
  onError: (err, req, res) => {
    console.error(`Error: ${err.message}`);
    res.status(500).send('Proxy Error');
  }
}));

// Catch all other requests
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Forx Proxy server running on http://localhost:${PORT}`);
});
