const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.MARIADB_DATABASE,
  process.env.MARIADB_USER,
  process.env.MARIADB_PASSWORD,
  {
    host: 'mariadb',
    dialect: 'mariadb',
    port: 3306,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
)

const db = {}
db.sequelize = sequelize

module.exports = db
