const express = require("express");
const { StringStream } = require("@scramjet/transform");
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/proxy", async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).send("URL is required!");

  try {
    const response = await fetch(url);
    const proxiedStream = StringStream.from(response.body).consume(chunk => res.write(chunk));
    proxiedStream.then(() => res.end());
  } catch (err) {
    res.status(500).send("Failed to fetch the URL!");
  }
});

app.listen(PORT, () => {
  console.log(`Forx proxy server running on http://localhost:${PORT}`);
});
