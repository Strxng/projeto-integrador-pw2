module.exports = class LoadUserByEmailRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async find (email) {
    const result = await this.dbConnection.query(`  
      SELECT id_user, id_level, name, email, password  
      FROM nursery.users
      WHERE email = :email
    `,
    {
      replacements: { email },
      type: this.dbConnection.QueryTypes.SELECT
    })

    return result.length > 0 ? result[0] : null
  }
}
