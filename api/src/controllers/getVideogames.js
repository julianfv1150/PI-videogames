require('dotenv').config();
const { Videogames, Genres, Platforms } = require('../db.js')
const { API_KEY } = process.env
const axios = require('axios')

const apiHost = "https://api.rawg.io/api/";

const getVideogames = async (req, res) => {
    
    let listVgames = [];
    let apiVgames = [];
    let bdVgames = [];
    try {
        bdVgames = await Videogames.findAll({include: [
            { model: Genres, attributes: ['id', 'name'] },
            { model: Platforms, attributes: ['id', 'name'] },
        ]});
        listVgames = bdVgames
    } catch (error) {
        return res.status(500).json(error.message)
    }
      
    let flag = 1;
    const promises = [];
    while(flag < 6){
        promises.push(axios.get(`${apiHost}games?key=${API_KEY}&page=${flag}`));
    flag++;
    }

    Promise.all(promises)
        .then(promises=>{
            promises.forEach(response => {
                apiVgames.push(response.data.results)
            })
        })
        .then((response) => {
            apiVgames.forEach((page) => {
                page.forEach((games) =>{
                    listVgames.push({
                        id: games.id,
                        name: games.name,
                        released: games.released,
                        img: games.background_image,
                        rating: games.rating,
                        platforms: games.platforms.map(elem => elem.platform),
                        genres: games.genres                        
                    })
                })
            })
            return res.status(200).json(listVgames)
        })
        .catch(error => {
            console.error('Falla al recuperar juegos de la API: ', error.message);
        });
}

module.exports = getVideogames;