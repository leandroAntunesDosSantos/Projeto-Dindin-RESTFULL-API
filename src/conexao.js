require("dotenv").config();
const { DB_HOST, DB_PORT, DB_USER, DB_DATABASE, DB_PASSWORD, ENDPOINT_ID, SSL } = process.env;

const { Pool } = require("pg");

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  ssl:SSL,
  ssl: {
    rejectUnauthorized: false,
  },
  // connection: {
  //   options: `project=${ENDPOINT_ID}`,
  // },
});

module.exports = pool;
