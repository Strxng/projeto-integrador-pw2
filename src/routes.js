const { Router } = require('express')
// const authValidation = require('./config/middlewares/authValidation')
const LoginRouterCompose = require('./composies/LoginRouterCompose')
const SignUpRouterCompose = require('./composies/SignUpRouterCompose')
const UfsRouterCompose = require('./composies/UfsRouterCompose')

const routes = Router()

routes.get('/status', (req, res) => {
  res.send('Online')
})

routes.post('/login', (req, res) => {
  new LoginRouterCompose().compose().route(req, res)
})
routes.post('/signup', (req, res) => {
  new SignUpRouterCompose().compose().route(req, res)
})
routes.get('/ufs', (req, res) => {
  new UfsRouterCompose().compose().route(req, res)
})

module.exports = routes
