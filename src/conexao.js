require("dotenv").config();
const { DB_HOST, DB_PORT, DB_USER, DB_DATABASE, DB_PASSWORD } = process.env;

const { text } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  sslmode:require,
  ssl: {
    mode: "require",
    rejectUnauthorized: false,
    
  },
  
});

module.exports = pool;
