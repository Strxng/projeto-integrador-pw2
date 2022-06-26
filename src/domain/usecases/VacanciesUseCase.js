module.exports = class VacanciesUseCase {
  constructor ({ loadVacanciesDirectorByIdUserRepository, loadVacanciesAdminRepository } = {}) {
    this.loadVacanciesDirectorByIdUserRepository = loadVacanciesDirectorByIdUserRepository
    this.loadVacanciesAdminRepository = loadVacanciesAdminRepository
  }

  async loadVacanciesDirector (idUser) {
    return await this.loadVacanciesDirectorByIdUserRepository.load(idUser)
  }

  async loadVacanciesAdmin () {
    return await this.loadVacanciesAdminRepository.load()
  }
}
