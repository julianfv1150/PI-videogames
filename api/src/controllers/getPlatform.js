require('dotenv').config();
const { Platforms } = require('../db.js');

const getPlatform = async (req, res) => {

    try {
        const platform = await Platforms.findAll();
        return res.status(200).json(platform)
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getPlatform;
