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
      res.send(insertedUser)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
