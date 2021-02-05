'use sctrict'

const { Pool } = require('pg')

const { handleFatalError } = require('../utils/errors')

module.exports = async function setupDatabasePostgresql(config) {
  let postgresql = null

  if (!postgresql) {
    let pool = new Pool(config)
    postgresql = pool
      .connect()
      .then((client) => client)
      .catch(handleFatalError)
  }

  return postgresql
}
