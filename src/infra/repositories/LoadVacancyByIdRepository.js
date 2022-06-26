module.exports = class LoadVacancyByIdRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idVacancy) {
    return await this.dbConnection.selectOne(`
      SELECT
        id_vacancy,
        id_nursery,
        amount,
        description,
        class
      FROM nursery.vacancies
      WHERE id_vacancy = :idVacancy
    `, { idVacancy })
  }
}
