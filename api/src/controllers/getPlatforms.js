require('dotenv').config();
const { Platforms } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;

const apiHost = "https://api.rawg.io/api/";

const getPlatforms = async (req, res) => {

    try {
        let platformsAPI;
        
        const platform = (data) => {
            let platforms = [];
            data.results.map((plat) => plat.name).forEach((plat) => {
                platforms.push({name: plat})
            });          
            return platforms;
        };

        const { data } = await axios.get(`${apiHost}platforms?&key=${API_KEY}`);
        platformsAPI = platform(data);
        const { next } = data;
        
        if( next ){       
            const { data } = await axios.get(next)
            platformsAPI = [...platformsAPI, ...platform(data)];
        }
        
        console.log('PLATFORM-FINALLY', platformsAPI.length);
        const createplatforms = await Platforms.bulkCreate(platformsAPI);
        return res.status(200).json(platformsAPI)
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getPlatforms;