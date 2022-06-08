const moment = require('moment')

module.exports = {
  format: (dateString, dateFormat) => {
    return moment(dateString, dateFormat).toDate()
  }
}
