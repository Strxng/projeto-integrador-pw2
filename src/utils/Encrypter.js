const bcrypt = require('bcrypt')

module.exports = class Encrypter {
  compare (password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword)
  }

  crypt (password) {
    return bcrypt.hash(password, 10)
  }
}
