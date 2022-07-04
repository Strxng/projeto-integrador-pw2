module.exports = class LoadVacanciesByIdNurseryRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idNursery) {
    return await this.dbConnection.selectList(`  
      select
        vacancies.id_vacancy as idVacancy,
        vacancies.amount,
        vacancies.description,
        vacancies.class
      from nursery.vacancies
      inner join nursery.nurseries
      on vacancies.id_nursery = nurseries.id_nursery
      where vacancies.amount > 0
      and nurseries.id_nursery = :idNursery
    `,
    { idNursery })
  }
}
