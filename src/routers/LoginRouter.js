module.exports = class LoginRouter {
  constructor ({ authUseCase } = {}) {
    this.authUseCase = authUseCase
  }

  async route (req, res) {
    try {
      const { email, password } = req.body
      const response = await this.authUseCase.auth(email, password)
      res.send({ ...response })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
