const { Router } = require('express')
const authValidation = require('../config/middlewares/authValidation')
const LoginRouterCompose = require('../domain/composies/LoginRouterCompose')
const SignUpRouterCompose = require('../domain/composies/SignUpRouterCompose')
const UfsRouterCompose = require('../domain/composies/UfsRouterCompose')
const CitiesRouterCompose = require('../domain/composies/CitiesRouterCompose')
const NeighborhoodsRouterCompose = require('../domain/composies/NeighborhoodsRouterCompose')
const NurseriesRouterCompose = require('../domain/composies/NurseriesRouterCompose')
const NurseryDetailRouterCompose = require('../domain/composies/NurseryDetailRouterCompose')
const RegistrationRouterCompose = require('../domain/composies/RegistrationRouterCompose')
const ProfileRouterCompose = require('../domain/composies/ProfileRouterCompose')
const ChangePasswordRouterCompose = require('../domain/composies/ChangePasswordRouterCompose')
const UserRegistrationsRouterCompose = require('../domain/composies/UserRegistrationsRouterCompose')

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
routes.get('/ufs/:idState/cities', (req, res) => {
  new CitiesRouterCompose().compose().route(req, res)
})
routes.get('/cities/:idCity/neighborhoods', (req, res) => {
  new NeighborhoodsRouterCompose().compose().route(req, res)
})
routes.get('/neighborhoods/:idNeighborhood/nurseries', (req, res) => {
  new NurseriesRouterCompose().compose().route(req, res)
})
routes.get('/nurseries/:idNursery', (req, res) => {
  new NurseryDetailRouterCompose().compose().route(req, res)
})
routes.post('/nurseries/:idNursery/vacancies/:idVacancy/registration', authValidation, (req, res) => {
  new RegistrationRouterCompose().compose().route(req, res)
})
routes.get('/profile', authValidation, (req, res) => {
  new ProfileRouterCompose().compose().route(req, res)
})
routes.post('/changePassword', authValidation, (req, res) => {
  new ChangePasswordRouterCompose().compose().route(req, res)
})
routes.get('/registrations', authValidation, (req, res) => {
  new UserRegistrationsRouterCompose().compose().route(req, res)
})

module.exports = routes
