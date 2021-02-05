'use sctrict'

const { handleError } = require('../utils/errors')

module.exports = function setupRestaurantModel(client) {
  const TABLE = 'restaurants'

  async function createOrUpdate(restaurant) {
    let values, query

    if (restaurant.id) {
      let exits = await findById(restaurant.id)

      if (exits) {
        values = [
          restaurant.uuid,
          restaurant.name,
          restaurant.phone_number,
          restaurant.geolocation,
        ]
        query = `UPDATE ${TABLE} SET uuid=$1, name=$2, phone_number=$3, geolocation=$4 WHERE id = ${restaurant.id} RETURNING *`

        return client
          .query(query, values)
          .then((result) => result.rows)
          .catch(handleError)
      }
    }

    values = [
      restaurant.uuid,
      restaurant.name,
      restaurant.phone_number,
      restaurant.geolocation,
    ]

    query = `INSERT INTO ${TABLE}(uuid, name, phone_number, geolocation) VALUES($1, $2, $3, $4) RETURNING *`

    return client
      .query(query, values)
      .then((result) => result.rows)
      .catch(handleError)
  }

  async function findById(restaurantId) {
    return client
      .query(`SELECT * FROM ${TABLE} WHERE id = ${restaurantId}`)
      .then((result) => result.rows[0])
      .catch(handleError)
  }

  async function findAll() {
    return client
      .query(`SELECT * FROM ${TABLE}`)
      .then((result) => result.rows)
      .catch(handleError)
  }

  return {
    findAll,
    findById,
    createOrUpdate,
  }
}
