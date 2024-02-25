require('dotenv').config();
const { Genres } = require('../db.js');

const getGenre = async (req, res) => {

    try {
        const genre = await Genres.findAll();
        return res.status(200).json(genre)
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getGenre;
