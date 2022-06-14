module.exports = class InsertRegistrationRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async insert (register) {
    register.createdAt = new Date()
    register.updatedAt = new Date()

    const result = await this.dbConnection.query(`  
      INSERT INTO nursery.registrations
        (id_user, id_vacancy, children_name, children_birthdate, father_name, mother_name, information, status, created_at, updated_at)
      OUTPUT INSERTED.*
      VALUES
        (:idUser, :idVacancy, :childrenName, :childrenBirthdate, :fatherName, :motherName, :information, :status, :createdAt, :updatedAt)
    `,
    {
      replacements: {
        ...register
      },
      type: this.dbConnection.QueryTypes.INSERT
    })

    return result[0].length > 0 ? result[0][0] : null
  }
}
