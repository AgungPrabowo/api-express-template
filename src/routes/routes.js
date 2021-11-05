const router = require('express').Router()
const example = require('../controllers/example')

module.exports = (app) => {
  router.get('/router-example', example.routerExample)

  app.use('/', router)
}
