const { Users } = require('../db.js');

const getUser = async (req, res) => {

    try {
        const { email, pass } = req.query
        const { password } = await Users.findOne({
            where:{
                email: email
            }});
        (password === pass) 
        ? res.status(200).json({state: true})
        : res.status(200).json({state: false})
        return;
    }
    catch (error) {
        return res.status(500).json({
                                    state: false,
                                    message: 'Datos inválidos'
                                    })
    }
}

module.exports = getUser;