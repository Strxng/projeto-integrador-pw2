module.exports = class LoginRouter {
  constructor ({ authUseCase } = {}) {
    this.authUseCase = authUseCase
  }

  async route (req, res) {
    try {
      const { email, password } = req.body
      const user = await this.authUseCase.auth(email, password)
      const data = {
        idUser: user.id_user,
        idLevel: user.id_level,
        name: user.name,
        email: user.email
      }
      res.send(data)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
