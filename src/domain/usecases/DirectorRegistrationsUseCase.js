module.exports = class DirectorRegistrationsUseCase {
  constructor ({ loadRegistrationForDirectorByIdUserRepository } = {}) {
    this.loadRegistrationForDirectorByIdUserRepository = loadRegistrationForDirectorByIdUserRepository
  }

  async load (idUser) {
    return await this.loadRegistrationForDirectorByIdUserRepository.load(idUser)
  }
}
