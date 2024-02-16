const axios = require('axios');

const getLanding = (req, res) => {
    try {
        return res.status(200).json({message:'Respondiendo desde la barra'})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getLanding;