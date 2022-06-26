module.exports = class UserRegistrationsRouter {
  constructor ({ registrationUseCase, directorRegistrationsUseCase } = {}) {
    this.registrationUseCase = registrationUseCase
    this.directorRegistrationsUseCase = directorRegistrationsUseCase
  }

  async route (req, res) {
    try {
      const { idUser, idLevel } = req.headers

      if (idLevel.toString() === process.env.ID_LEVEL_DIRECTOR) {
        const registrations = await this.directorRegistrationsUseCase.load(idUser)
        res.send(registrations)
      } else {
        const registrations = await this.registrationUseCase.loadByIdUser(idUser)
        res.send(registrations)
      }
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
