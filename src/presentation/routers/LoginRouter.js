module.exports = class LoginRouter {
  constructor ({ authUseCase } = {}) {
    this.authUseCase = authUseCase
  }

  async route (req, res) {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        throw new Error('Preencha todos os campos')
      }

      const user = await this.authUseCase.auth(email, password)
      res.send(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
