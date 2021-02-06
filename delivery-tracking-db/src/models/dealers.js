'use sctrict'

const { handleError } = require('../utils/errors')

module.exports = function detupDealerModel(client) {
  const TABLE = 'dealers'

  async function createOrUpdate(dealer) {
    let values, query

    if (dealer.id) {
      let exits = await findById(dealer.id)

      if (exits) {
        values = [
          dealer.uuid,
          dealer.name,
          dealer.phone_number,
          dealer.geolocation,
          dealer.status,
        ]
        query = `UPDATE ${TABLE} SET uuid=$1, name=$2, phone_number=$3, geolocation=$4, status=$5 WHERE id = ${dealer.id} RETURNING *`

        return client
          .query(query, values)
          .then((result) => result.rows)
          .catch(handleError)
      }
    }

    values = [
      dealer.uuid,
      dealer.name,
      dealer.phone_number,
      dealer.geolocation,
      dealer.status,
    ]

    query = `INSERT INTO ${TABLE}(uuid, name, phone_number, geolocation, status) VALUES($1, $2, $3, $4, $5) RETURNING *`

    return client
      .query(query, values)
      .then((result) => result.rows)
      .catch(handleError)
  }

  async function findById(dealerId) {
    return client
      .query(`SELECT * FROM ${TABLE} WHERE id = ${dealerId} LIMIT 1`)
      .then((result) => result.rows[0])
      .catch(handleError)
  }

  async function findAll() {
    return client
      .query(`SELECT * FROM ${TABLE}`)
      .then((result) => result.rows)
      .catch(handleError)
  }

  async function updateGeolocation(dealerId, geolocation) {
    let values = [geolocation]
    let query = `UPDATE ${TABLE} SET geolocation=$1 WHERE id = ${dealerId}`
    return client
      .query(query, values)
      .then((result) => result.command)
      .catch(handleError)
  }

  return {
    findAll,
    findById,
    createOrUpdate,
    updateGeolocation,
  }
}
