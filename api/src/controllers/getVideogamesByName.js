require('dotenv').config();
const { Videogames, Genres, Platforms } = require('../db.js');
const axios = require('axios');
const { Op } = require('sequelize');
const { API_KEY } = process.env;

const apiHost = "https://api.rawg.io/api/";

const getVideogamesByName = async (req, res) => {
    try {
        let listCombined;
        let apiGames = [];
        const { name } = req.query;
        if(!name) return res.status(400).json({message:'Ingrese un nombre'})
        if(name){            
            const  { count, rows }  = await Videogames.findAndCountAll({include: [
                { model: Genres, attributes: ['id', 'name'] },
                { model: Platforms, attributes: ['id', 'name'] },
            ],
                where: {name: {[Op.iLike]: `%${name}%`}},
                limit: 15
            });
            listCombined = rows;
            if(count < 15){
                const { data } = await axios.get(`${apiHost}games?search=${name}&page_size=40&key=${API_KEY}`);
                data.results.forEach(games => {
                    apiGames.push({
                        id: games.id,
                        name: games.name,
                        released: games.released,
                        img: games.background_image,
                        rating: games.rating,
                        platforms: games.platforms.map(elem => elem.platform),
                        genres: games.genres
                    })
                })
                    
                listCombined = [...listCombined, ...apiGames];
            }                
        }
        return res.status(200).json(listCombined);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getVideogamesByName;

