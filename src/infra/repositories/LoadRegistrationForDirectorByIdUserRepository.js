module.exports = class LoadRegistrationForDirectorByIdUserRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idUser) {
    return await this.dbConnection.selectList(`
      SELECT
        r.id_registration as idRegistration,
        r.children_name as childrenName,
        r.status as status,
        v.class as class,
        u.name as responsible,
        u.phone as phone
      FROM nursery.nurseries n
      INNER JOIN nursery.vacancies v on n.id_nursery = v.id_nursery
      INNER JOIN nursery.registrations r on v.id_vacancy = r.id_vacancy
      INNER JOIN nursery.users u on r.id_user = u.id_user
      WHERE n.id_user = :idUser
    `, { idUser })
  }
}
