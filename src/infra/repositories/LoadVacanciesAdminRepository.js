module.exports = class LoadVacanciesAdminRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load () {
    return await this.dbConnection.selectList(`
      SELECT
        n.id_nursery as idNursery,
        u.name as director,
        v.id_vacancy as idVacancy,
        v.class,
        v.description,
        v.amount
      FROM nursery.vacancies v
      INNER JOIN nursery.nurseries n on v.id_nursery = n.id_nursery
      INNER JOIN nursery.users u on n.id_user = u.id_user
      WHERE amount >= 1
    `)
  }
}
