module.exports = class RegistrationRouter {
  constructor ({ registrationUseCase } = {}) {
    this.registrationUseCase = registrationUseCase
  }

  async route (req, res) {
    try {
      const { idUser } = req.headers
      const { idVacancy } = req.params

      const {
        childrenName,
        childrenBirthdate,
        motherName,
        fatherName,
        information
      } = req.body

      if (
        !childrenName ||
        !childrenBirthdate ||
        !motherName ||
        !fatherName ||
        !information
      ) {
        throw new Error('Preencha todos os campos')
      }

      const registration = await this.registrationUseCase.register(
        idUser,
        idVacancy,
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
