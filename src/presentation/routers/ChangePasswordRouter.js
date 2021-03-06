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

      await this.changePasswordUseCase.change(email, currentPassword, newPassword)
      res.send({ message: 'Senha alterada com sucesso' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
