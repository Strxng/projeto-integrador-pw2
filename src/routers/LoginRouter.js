module.exports = class LoginRouter {
  constructor({ authUseCase } = {}){
    this.authUseCase = authUseCase
  }

  route(req, res){
    try{
      const { email, password } = req.body
      const accessToken = this.authUseCase.auth(email, password)
      res.send(accessToken)
    } catch (error){
      res.json({ error: error.message })
    }
  }
}