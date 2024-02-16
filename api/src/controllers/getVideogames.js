const { Videogames } = require('../db.js')

const getVideogames = async (req, res) => {

    try {
        const listVgames = await Videogames.findAll();
        return res.status(200).json({listVgames})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getVideogames;