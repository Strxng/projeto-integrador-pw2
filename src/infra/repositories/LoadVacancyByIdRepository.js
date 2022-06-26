module.exports = class LoadVacancyByIdRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idVacancy) {
    return await this.dbConnection.selectOne(`
      SELECT
        id_vacancy as idVacancy,
        id_nursery as idNursery,
        amount,
        description,
        class
      FROM nursery.vacancies
      WHERE id_vacancy = :idVacancy
    `, { idVacancy })
  }
}
