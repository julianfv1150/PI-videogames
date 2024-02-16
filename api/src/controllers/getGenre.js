require('dotenv').config();
const { Genres } = require('../db.js');
const axios = require('axios');
const { API_KEY, API_URL } = process.env;

const getGenre = async (req, res) => {

    try {
        const { data } = await axios.get(`${API_URL}genres?&key=${API_KEY}`);
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
