const { Router } = require('express')
const routes = Router()

routes.get('/status', (req, res) => {
  res.send('Online')
})

module.exports = routes