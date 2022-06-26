module.exports = class LoadRegistrationsByIdUserRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idUser) {
    return await this.dbConnection.selectList(`
    SELECT
      r.id_registration as idRegistration,
      r.children_name as childrenName,
      r.children_birthdate as childrenBirthdate,
      r.father_name as fatherName,
      r.mother_name as motherName,
      r.information,
      r.status,
      v.id_vacancy as idVacancy,
      n.id_nursery as idNusery,
      n.name as nurseryName
    FROM nursery.registrations r
    INNER JOIN nursery.vacancies v on r.id_vacancy = v.id_vacancy
    INNER JOIN nursery.nurseries n on v.id_nursery = n.id_nursery
    WHERE r.id_user = :idUser
    `, { idUser })
  }
}
