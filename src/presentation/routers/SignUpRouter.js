module.exports = class SignUpRouter {
  constructor ({ signUpUseCase, dateFormat } = {}) {
    this.signUpUseCase = signUpUseCase
  }

  async route (req, res) {
    try {
      const { name, cpf, rg, birthdate, phone, email, password, image, address } = req.body

      if (!name || !cpf || !rg || !birthdate || !phone || !email || !password || !image || !address) {
        throw new Error('Preencha todos os campos')
      }

      const user = {
        name,
        cpf,
        rg,
        birthdate,
        phone,
        email,
        password,
        image
      }

      const insertedUser = await this.signUpUseCase.signup(user, address)
      const data = {
        idUser: insertedUser.id_user,
        idLevel: insertedUser.id_level,
        name: insertedUser.name,
        email: insertedUser.email,
        accessToken: insertedUser.accessToken
      }

      res.send(data)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
