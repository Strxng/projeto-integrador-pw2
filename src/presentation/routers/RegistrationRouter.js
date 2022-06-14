module.exports = class RegistrationRouter {
  constructor ({ registrationUseCase } = {}) {
    this.registrationUseCase = registrationUseCase
  }

  async route (req, res) {
    try {
      const { idUser } = req.headers

      const {
        childrenName,
        childrenBirthdate,
        motherName,
        fatherName,
        information
      } = req.body

      const registration = await this.registrationUseCase.register(
        idUser,
        childrenName,
        childrenBirthdate,
        motherName,
        fatherName,
        information
      )

      res.send(registration)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
