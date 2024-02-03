require("dotenv").config();

const envData = {
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "monorail.proxy.rlwy.net",
    port: "29454",
    user: "root",
    password: "gCG1gda11E3DB3FAe-aGcaeAdDC6bege",
    database: "railway",
  },
});

module.exports = knex;
