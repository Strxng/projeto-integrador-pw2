module.exports = class InsertUserRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async insert (user, idAddress) {
    user.idLevel = process.env.ID_LEVEL_COMMON_USER
    user.idAddress = idAddress
    user.createdAt = new Date()
    user.updatedAt = new Date()

    return await this.dbConnection.insert(`  
      INSERT INTO nursery.users 
        (id_level, id_address, name, birthdate, phone, cpf, rg, email, password, image, created_at, updated_at)
      OUTPUT
        INSERTED.id_user as idUser,
        INSERTED.id_level as idLevel,
        INSERTED.id_address as idAddress,
        INSERTED.name,
        INSERTED.birthdate,
        INSERTED.phone,
        INSERTED.cpf,
        INSERTED.rg,
        INSERTED.email,
        INSERTED.password,
        INSERTED.image,
        INSERTED.created_at as createdAt,
        INSERTED.updated_at as updatedAt
      VALUES
        (:idLevel, :idAddress, :name, :birthdate, :phone, :cpf, :rg, :email, :password, :image, :createdAt, :updatedAt)
    `, user)
  }
}
