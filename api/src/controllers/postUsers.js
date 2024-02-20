const { Users } = require('../db.js');

const postUsers = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const [user, created] = await Users.findOrCreate({
            where: {
                email: email
            },
            defaults:{
                email,
                name,
                password
            }
        })
        return res.status(200).json({
                                        data: user,
                                        isCreated: created
                                    })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = postUsers;
