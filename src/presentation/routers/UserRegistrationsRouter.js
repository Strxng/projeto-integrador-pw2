module.exports = class UserRegistrationsRouter {
  constructor ({ registrationUseCase } = {}) {
    this.registrationUseCase = registrationUseCase
  }

  async route (req, res) {
    try {
      const { idUser } = req.headers
      const registrations = await this.registrationUseCase.loadByIdUser(idUser)
      res.send(registrations)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
