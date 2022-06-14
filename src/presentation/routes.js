const { Router } = require('express')
// const authValidation = require('./config/middlewares/authValidation')
const LoginRouterCompose = require('../domain/composies/LoginRouterCompose')
const SignUpRouterCompose = require('../domain/composies/SignUpRouterCompose')
const UfsRouterCompose = require('../domain/composies/UfsRouterCompose')
const CitiesRouterCompose = require('../domain/composies/CitiesRouterCompose')
const NeighborhoodsRouterCompose = require('../domain/composies/NeighborhoodsRouterCompose')
const NurseriesRouterCompose = require('../domain/composies/NurseriesRouterCompose')

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
routes.get('/cities/:idState', (req, res) => {
  new CitiesRouterCompose().compose().route(req, res)
})
routes.get('/neighborhoods/:idCity', (req, res) => {
  new NeighborhoodsRouterCompose().compose().route(req, res)
})
routes.get('/nurseries/:idNeighborhood', (req, res) => {
  new NurseriesRouterCompose().compose().route(req, res)
})

module.exports = routes
