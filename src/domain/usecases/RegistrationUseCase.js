module.exports = class RegistrationUseCase {
  constructor ({ insertRegistrationRepository, dateFormat } = {}) {
    this.insertRegistrationRepository = insertRegistrationRepository
    this.dateFormat = dateFormat
  }

  async register (
    idUser,
    idVacancy,
    childrenName,
    childrenBirthdate,
    motherName,
    fatherName,
    information
  ) {
    const status = 'pending'
    childrenBirthdate = this.dateFormat.format(childrenBirthdate, 'DD/MM/YYYY')
    const registration = await this.insertRegistrationRepository.insert({
      idUser,
      idVacancy,
      childrenName,
      childrenBirthdate,
      motherName,
      fatherName,
      information,
      status
    })

    return registration
  }
}
