const jwt = require('jsonwebtoken');
const config = require('../../config/config')

const SECRET_KEY = config.SECRET_KEY;
const TIME_TOKEN = Number(config.TIME_TOKEN);

const generateToken = (res, id, username )=>{
    const expiration = TIME_TOKEN;
    const token = jwt.sign({id, username}, SECRET_KEY, {
        expiresIn: expiration
    });

    return token;
}

module.exports = generateToken;