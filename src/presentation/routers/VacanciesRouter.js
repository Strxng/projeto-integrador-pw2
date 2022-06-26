module.exports = class VacanciesRouter {
  constructor ({ vacanciesUseCase } = {}) {
    this.vacanciesUseCase = vacanciesUseCase
  }

  async route (req, res) {
    try {
      const { idLevel, idUser } = req.headers

      if (idLevel.toString() === process.env.ID_LEVEL_DIRECTOR) {
        const vacancies = await this.vacanciesUseCase.loadVacanciesDirector(idUser)
        res.send(vacancies)
      } else if (idLevel.toString() === process.env.ID_LEVEL_ADMIN) {
        const vacancies = await this.vacanciesUseCase.loadVacanciesAdmin()
        res.send(vacancies)
      } else {
        throw new Error('Você não tem permissão')
      }
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
