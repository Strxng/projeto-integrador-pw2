module.exports = class InsertAddressRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async insert (address) {
    address.createdAt = new Date()
    address.updatedAt = new Date()

    return await this.dbConnection.insert(`  
      INSERT INTO nursery.adresses 
        (id_neighborhood, postal_code, street, number, complement, created_at, updated_at)
      OUTPUT 
        INSERTED.id_neighborhood as idNeighborhood,
        INSERTED.postal_code as postalCode,
        INSERTED.street,
        INSERTED.number,
        INSERTED.complement,
        INSERTED.created_at as createdAt,
        INSERTED.updated_at as updatedAt
      VALUES
        (:idNeighborhood, :postalCode, :street, :number, :complement, :createdAt, :updatedAt)
    `, address)
  }
}
