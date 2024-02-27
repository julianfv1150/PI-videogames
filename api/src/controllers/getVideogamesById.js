require('dotenv').config();
const { Videogames, Genres, Platforms } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;

const apiHost = "https://api.rawg.io/api/";

const getVideogamesById = async (req, res) => {

    try {
        const { id } = req.params;
        if((isNaN(id)) && (id.length === 36)){
            const listVgames = await Videogames.findByPk(id, {include: [
                { model: Genres, attributes: ['id', 'name'] },
                { model: Platforms, attributes: ['id', 'name'] },
            ]})
            return res.status(200).json({
                                        id: listVgames.id,
                                        name: listVgames.name,
                                        released: listVgames.released,
                                        description: listVgames.description,
                                        img: listVgames.img,
                                        rating: listVgames.rating,
                                        platforms: listVgames.platforms.map(elem => elem.name),
                                        genres: listVgames.genres.map(elem => elem.name)
                                    })
        }
        else if(Number(id)){
            const { data } = await axios.get(`${apiHost}games/${id}?key=${API_KEY}`);
            return res.status(200).json({
                                        id: data.id,
                                        name: data.name,
                                        released: data.released,
                                        description: data.description,
                                        img: data.background_image,
                                        rating: data.rating,
                                        platforms: data.platforms.map(elem => elem.platform.name),
                                        genres: data.genres.map(elem => elem.name)
                                    });
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