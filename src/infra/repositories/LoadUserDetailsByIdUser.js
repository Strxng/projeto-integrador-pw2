module.exports = class LoadUserDetailsByIdUser {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idUser) {
    return await this.dbConnection.selectOne(`
      SELECT name, birthdate, email, phone
      FROM nursery.users
      WHERE id_user = 1
    `, { idUser })
  }
}
