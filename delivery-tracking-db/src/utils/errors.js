'use sctrict'

const chalk = require('chalk')

module.exports = {
  handleFatalError: (err) => {
    console.error(`${chalk.red('[delivery-tracking-db] - ')} ${err.message}`)
    console.error(err.stack)
    process.exit(1)
  },
  handleError: (err) => {
    console.error(`${chalk.red('[delivery-tracking-db] - ')} ${err.message}`)
    console.error(err.stack)
    return err.detail
  },
}
