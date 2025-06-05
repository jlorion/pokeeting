import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router();
const API_URL = process.env.POKEMON_URL;
console.log(process.env.POKEMON_URL)

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL+"?limit=100");
    res.render("pages/home", { pokemonList: response.data.results });
  } catch (error) {
    res.status(500).send("Error fetching Pokémon data");
  }
});


router.get("/search", async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) return res.redirect("/");

    const response = await axios.get(`${API_URL}/${name.toLowerCase()}`);
    res.render("pages/details", { pokemon: response.data });
  } catch (error) {
    res.status(404).send("Pokémon not found");
  }
});


router.get("/pokemon/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`${API_URL}/${name}`);
    res.render("pages/details", { pokemon: response.data });
  } catch (error) {
    res.status(500).send("Pokémon not found");
  }
});

export default router
