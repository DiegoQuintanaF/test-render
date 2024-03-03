// models/user.js
const user  = require('../models/user')
const generateToken = require('../utils/jwt/token')

module.exports.signIn = async (req, res) => {
    const {username, password} = req.body;

    try {
        const data = await user.validateUser(username, password);
        if (data === true){
            const userData = await user.getUserByUsername(username);
            const token = generateToken(res, userData.id, username);
            res.status(201).json({ token: token, message: 'Inicio de sesion exitosamente' });
        } else {
            res.status(401).json({status: 401, msg: "Contraseña o usuario incorrectos"});
        }

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}