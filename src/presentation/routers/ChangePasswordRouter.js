module.exports = class ChangePasswordRouter {
  constructor ({ changePasswordUseCase } = {}) {
    this.changePasswordUseCase = changePasswordUseCase
  }

  async route (req, res) {
    try {
      const { email } = req.headers
      const { currentPassword, newPassword } = req.body

      if (!currentPassword || !newPassword) {
        throw new Error('Preencha todos os campos')
      }

      const result = await this.changePasswordUseCase.change(email, currentPassword, newPassword)
      res.send(result)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
