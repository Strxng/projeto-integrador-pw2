module.exports = class LoadUserByEmailRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (email) {
    return await this.dbConnection.selectOne(`  
      SELECT 
        id_user as idUser, 
        id_level as idLevel, 
        name, 
        email, 
        password  
      FROM nursery.users
      WHERE email = :email
    `,
    { email })
  }
}
