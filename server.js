const express = require("express");
const app = express();
const database = require("./database");

var dados = {
  name: "Julio",
  email: "email.com",
  password: "12345",
  role: "admin",
};

database
  .insert(dados)
  .into("users")
  .then(async (data) => {
    await console.log(data);
  })
  .catch((err) => {
    console.log(`algo deu errado: ${err}`);
  });

app.get("/", (req, res) => {
  res.send(envTeste);
});

app.listen(process.env.PORT || 8081, () => {
  console.log("servidor rodando");
});
