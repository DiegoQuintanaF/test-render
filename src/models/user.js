const pool = require('../db/db');
const encode = require('../utils/encode');

const createUser = async (username, name, lastName, country, email, password) => {
  const query = {
    text: 'INSERT INTO users (username, name_user, lastname_user, id_country, email, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_users',
    values: [username, name, lastName, country, email, password]
  };
  const { rows } = await pool.query(query);
  return rows[0].id_users;
};

const getUserByUsername = async (username) => {
  const query = {
    text: 'SELECT id_users, username, name_user, lastname_user, id_country, email FROM users WHERE username = $1',
    values: [username]
  };
  const { rows } = await pool.query(query);
  return rows[0] || null;
};

const getUserById = async (id) => {
  const query = {
    text: 'SELECT id_users, username, name_user, lastname_user, id_country, email FROM users WHERE id_users = $1',
    values: [id]
  };
  const { rows } = await pool.query(query);
  return rows[0] || null;
};

const validateUser = async (username, password) => {
  const query = {
    text: 'SELECT id_users, username, password FROM users WHERE username = $1',
    values: [username]
  };
  const { rows } = await pool.query(query);
  
  if (rows.length === 0) {
    return null; // No existe
  }
  
  const storedPassword = rows[0].password;
  const passMatches = await encode.compare(password, storedPassword);
  
  if (passMatches) {
    return true;
  } else {
    return null; // No coinciden
  }
};

module.exports = { createUser, getUserByUsername, getUserById, validateUser };
