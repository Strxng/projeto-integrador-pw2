module.exports = class UpdateUserPasswordByIdUserRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async update (idUser, password) {
    return await this.dbConnection.update(`
      UPDATE nursery.users
      SET password = :password
      WHERE id_user = :idUser
    `, { password, idUser })
  }
}
