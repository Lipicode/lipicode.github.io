const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

const targetServer = 'https://example-proxy-server.com';

app.use(express.static("public"));

app.use("/proxy", createProxyMiddleware({
  target: targetServer,
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '',
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying request to: ${targetServer}${req.url}`);
  },
  onError: (err, req, res) => {
    console.error(`Error: ${err.message}`);
    res.status(500).send('Proxy Error');
  }
}));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Forx Proxy server running on http://localhost:${PORT}`);
});
