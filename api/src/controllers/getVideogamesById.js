require('dotenv').config();
const { Videogames } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;

const apiHost = "https://api.rawg.io/api/";

const getVideogamesById = async (req, res) => {

    try {
        const { id } = req.params;
        if((isNaN(id)) && (id.length === 36)){
            const listVgames = await Videogames.findByPk(id)
            return res.status(200).json(listVgames)
        }
        else if(Number(id)){
            const { data } = await axios.get(`${apiHost}games/${id}?key=${API_KEY}`);
            return res.status(200).json(data.name);
        }
        else{
            return res.status(200).json({message: "ID no encontrado, por favor ingrese otro"})
        }
    } 
    catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getVideogamesById;