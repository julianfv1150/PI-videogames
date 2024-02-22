require('dotenv').config();
const { Genres } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;

const apiHost = "https://api.rawg.io/api/";

const getGenre = async (req, res) => {

    try {
        const { data } = await axios.get(`${apiHost}genres?&key=${API_KEY}`);
        const generos = [];
            data.results.map((gen) => gen.name).forEach((gen) => {
                generos.push({name: gen})
            });          
        const createGenres = await Genres.bulkCreate(generos);
        return res.status(200).json({generos})
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getGenre;
