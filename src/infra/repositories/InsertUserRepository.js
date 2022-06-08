module.exports = class InsertUserRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async insert (user, idAddress) {
    user.idLevel = process.env.ID_LEVEL_COMMON_USER
    user.idAddress = idAddress
    user.createdAt = new Date()
    user.updatedAt = new Date()

    const result = await this.dbConnection.query(`  
      INSERT INTO nursery.users 
        (id_level, id_address, name, birthdate, phone, cpf, rg, email, password, image, created_at, updated_at)
      OUTPUT INSERTED.*
      VALUES
        (:idLevel, :idAddress, :name, :birthdate, :phone, :cpf, :rg, :email, :password, :image, :createdAt, :updatedAt)
    `,
    {
      replacements: {
        ...user
      },
      type: this.dbConnection.QueryTypes.INSERT
    })

    return result[0].length > 0 ? result[0][0] : null
  }
}
