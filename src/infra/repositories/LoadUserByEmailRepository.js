module.exports = class LoadUserByEmailRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (email) {
    return await this.dbConnection.selectOne(`  
      SELECT id_user, id_level, name, email, password  
      FROM nursery.users
      WHERE email = :email
    `,
    { email })
  }
}
