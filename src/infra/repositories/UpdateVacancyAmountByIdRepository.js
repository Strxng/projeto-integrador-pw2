module.exports = class UpdateVacancyAmountByIdRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async update (idVacancy, amount) {
    return await this.dbConnection.update(`
      UPDATE nursery.vacancies
      SET amount = :amount
      WHERE id_vacancy = :idVacancy
    `, { idVacancy, amount })
  }
}
