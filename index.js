require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const db = require('./src/models')

const port = 3001

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
db.sequelize.sync()

// config CORS
app.use(cors())

// initial routing
require('./src/routes/routes')(app)

app.listen(port, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}.`)
})
