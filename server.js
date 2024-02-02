const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.listen(process.env.PORT || 8081, () => {
  console.log("servidor rodando");
});
