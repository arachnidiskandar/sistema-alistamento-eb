const knex = require("knex")({
  client: "pg",
  version: "12.3",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

module.exports = knex;
