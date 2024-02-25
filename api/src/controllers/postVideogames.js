const { Videogames } = require('../db')

const postVideogames = async (req, res) => {
    
    try {
        const { name, description, img, released,  genre, platform, rating } = req.body;
        const [Vgames, created] = await Videogames.findOrCreate({
            where: {name: name},
            defaults: {
              name,
              description,
              img,
              released,
              rating,
            }
        });
        if(created) await Vgames.addGenres(genre)
        if(created) await Vgames.addPlatforms(platform)
        res.status(200).json({isCreated: created})        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = postVideogames;