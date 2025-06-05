const express = require("express");
const axios = require("axios");
const path = require("path");
const layout = require('express-ejs-layouts');

const app = express();
const port = 3000;
const pokemonRoutes = require("./routes/pokemon");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public")));

app.set('layout', 'layouts/layout');
app.use(layout);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use("/", pokemonRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));