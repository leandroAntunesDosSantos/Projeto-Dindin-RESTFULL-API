const express = require("express");
const rotas = require("./rotas");

require("dotenv").config();
const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use(rotas);

app.listen(PORT);
