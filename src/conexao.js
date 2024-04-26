require("dotenv").config();
const { DB_HOST, DB_PORT, DB_USER, DB_DATABASE, DB_PASSWORD, DB_SSL } = process.env;

const { Pool } = require("pg");

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
