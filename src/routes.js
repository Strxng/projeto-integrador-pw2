const { Router } = require('express')
const LoginRouterCompose = require('./composies/LoginRouterCompose')

const routes = Router()

routes.get('/status', (req, res) => {
  res.send('Online')
})

routes.post('/login', (req, res) => {
  new LoginRouterCompose().compose().route(req, res)
})

module.exports = routes