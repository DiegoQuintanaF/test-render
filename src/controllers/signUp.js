// models/user.js
const user  = require('../models/user')
const encode = require('../utils/encode')
const generateToken = require('../utils/jwt/token')

module.exports.signUp = async (req, res) => {
    const {username, name, last_name, country, email, password} = req.body;
    const pass = await encode.encrypt(password);

    try {
        // llamamos a funcion del modelo de user para crear un nuevo usuario
        const userId = await user.createUser(username, name, last_name, country, email, pass);
        const token = generateToken(res, userId, username);
        
        // Devuelve la respuesta adecuada
        res.status(201).json({ userId, token: token, message: 'Usuario creado exitosamente' });
    } catch (e) {
        console.error('Error al crear el usuario:', e);
        res.status(401).json({ message: e.message });
    }
}

