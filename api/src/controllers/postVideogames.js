const { Videogames, Genres  } = require('../db')

const postVideogames = async (req, res) => {
    
    try {
        const { name, description, img, releaseDate,  genre } = req.body;
        const [Vgames, created] = await Videogames.findOrCreate({
            where: {name: name},
            defaults: {
              name,
              description,
              img,
              releaseDate,
            }
        });
        if(created) await Vgames.addGenres(genre)
        res.status(200).json({isCreated: created})        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = postVideogames;