module.exports = class AuthUseCase {
  auth (email, password) {
    if (!email || !password) {
      throw new Error('Missing params')
    }
  }
}
