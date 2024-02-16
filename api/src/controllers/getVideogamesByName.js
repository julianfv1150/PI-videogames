require('dotenv').config();
const { Videogames } = require('../db.js');
const axios = require('axios');
const { Op } = require('sequelize');
const { API_KEY, API_URL } = process.env;

const getVideogamesByName = async (req, res) => {
    try {
        let listCombined;
        const { name } = req.query;
        if(!name) return res.status(400).json({message:'Ingrese un nombre'})
        if(name){            
            const  { count, rows }  = await Videogames.findAndCountAll({
                where: {name: {[Op.iLike]: `%${name}%`}},
                limit: 15
            });
            listCombined = [...rows];
            if(count < 15){
                const { data } = await axios.get(`${API_URL}games?search=${name}&page_size=${15-count}&key=${API_KEY}`);
                listCombined = [listCombined, [...data.results]];
            }                
        }
        return res.status(200).json(listCombined);
    } catch (error) {
        const { response } = error
        if(response.status = 404) return res.status(500).json({message: 'No se encontró el juego.'})
        return res.status(500).json(error.message)
    }
}

module.exports = getVideogamesByName;