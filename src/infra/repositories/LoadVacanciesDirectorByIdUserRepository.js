module.exports = class LoadVacanciesDirectorByIdUserRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idUser) {
    return await this.dbConnection.selectList(`
    SELECT
      v.id_vacancy as idVacancy,
      v.class,
      v.description,
      v.amount
    FROM nursery.vacancies v
    INNER JOIN nursery.nurseries n on v.id_nursery = n.id_nursery
    WHERE n.id_user = :idUser
    AND v.amount >= 1
    `, { idUser })
  }
}
