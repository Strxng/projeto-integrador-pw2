module.exports = class SignUpUseCase {
  constructor ({ insertAddressRepository, insertUserRepository, loadUserByEmailRepository, authTokenGenerator, dateFormat, encrypter } = {}) {
    this.insertAddressRepository = insertAddressRepository
    this.insertUserRepository = insertUserRepository
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.authTokenGenerator = authTokenGenerator
    this.dateFormat = dateFormat
    this.encrypter = encrypter
  }

  async signup (user, address) {
    user.birthdate = this.dateFormat.format(user.birthdate, 'DD/MM/YYYY')
    user.password = await this.encrypter.crypt(user.password)

    const userLoaded = await this.loadUserByEmailRepository.load(user.email)
    if (userLoaded) {
      throw new Error('E-mail já cadastrado')
    }

    const insertedAddress = await this.insertAddressRepository.insert(address)
    const insertedUser = await this.insertUserRepository.insert(user, insertedAddress.id_address)

    delete insertedUser.id_address
    delete insertedUser.password
    insertedUser.address = insertedAddress

    const payload = {
      idUser: insertedUser.id_user,
      idLevel: insertedUser.id_level,
      name: insertedUser.name,
      email: insertedUser.email
    }

    insertedUser.accessToken = this.authTokenGenerator.generate(payload)

    return insertedUser
  }
}
