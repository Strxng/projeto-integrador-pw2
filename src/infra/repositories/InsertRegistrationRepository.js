module.exports = class InsertRegistrationRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async insert (register) {
    register.createdAt = new Date()
    register.updatedAt = new Date()

    return await this.dbConnection.insert(`  
      INSERT INTO nursery.registrations
        (id_user, id_vacancy, children_name, children_birthdate, father_name, mother_name, information, status, created_at, updated_at)
      OUTPUT INSERTED.*
      VALUES
        (:idUser, :idVacancy, :childrenName, :childrenBirthdate, :fatherName, :motherName, :information, :status, :createdAt, :updatedAt)
    `,
    { register })
  }
}
