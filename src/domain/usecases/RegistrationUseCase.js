module.exports = class RegistrationUseCase {
  constructor ({
    insertRegistrationRepository,
    dateFormat,
    loadVacancyByIdRepository,
    updateVacancyAmountByIdRepository,
    loadRegistrationsByIdUserRepository
  } = {}) {
    this.insertRegistrationRepository = insertRegistrationRepository
    this.loadVacancyByIdRepository = loadVacancyByIdRepository
    this.updateVacancyAmountByIdRepository = updateVacancyAmountByIdRepository
    this.loadRegistrationsByIdUserRepository = loadRegistrationsByIdUserRepository
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
    const status = 'pendente'
    childrenBirthdate = this.dateFormat.format(childrenBirthdate, 'DD/MM/YYYY')

    const vacancy = await this.loadVacancyByIdRepository.load(idVacancy)
    if (vacancy.amount <= 0) {
      throw new Error('Não existem mais vagas disponíveis para esta turma')
    }

    await this.insertRegistrationRepository.insert({
      idUser,
      idVacancy,
      childrenName,
      childrenBirthdate,
      motherName,
      fatherName,
      information,
      status
    })

    const amount = vacancy.amount - 1
    await this.updateVacancyAmountByIdRepository.update(idVacancy, amount)
  }

  async loadByIdUser (idUser) {
    return await this.loadRegistrationsByIdUserRepository.load(idUser)
  }
}
