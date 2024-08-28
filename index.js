const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.json({ api: "Basic server" });
});

app.listen(8080);
