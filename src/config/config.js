require("dotenv").config()

module.exports = {
    port : process.env.PORT || 8080,
    DB_HOST : process.env.DB_HOST,
    DB_USER : process.env.DB_USER,
    DB_PORT : process.env.DB_PORT,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_DATABASE : process.env.DB_DATABASE,
    SALT_ROUNDS : process.env.SALT_ROUNDS,
    SECRET_KEY : process.env.SECRET_KEY,
    TIME_TOKEN : process.env.TIME_TOKEN
}