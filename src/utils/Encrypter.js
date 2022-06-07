const bcrypt = require('bcrypt')

module.exports = class Encrypter {
  compare (password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword)
  }
}
