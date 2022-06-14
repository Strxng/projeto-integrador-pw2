module.exports = class LoadVacanciesByIdNurseryRepository {
  constructor ({ dbConnection }) {
    this.dbConnection = dbConnection.getConnection()
  }

  async load (idNursery) {
    return await this.dbConnection.query(`  
      select
        vacancies.id_vacancy,
        vacancies.amount,
        vacancies.description,
        vacancies.class
      from nursery.vacancies
      inner join nursery.nurseries
      on vacancies.id_nursery = nurseries.id_nursery
      where nurseries.id_nursery = :idNursery
    `,
    {
      replacements: { idNursery },
      type: this.dbConnection.QueryTypes.SELECT
    })
  }
}
