require('dotenv').config()

module.exports = {
  development: {
    "username": process.env.usernamePG,
    "password": process.env.passwordPG,
    "database": "company",
    "host": "127.0.0.1",
    dialect: 'postgres',
  },
}
