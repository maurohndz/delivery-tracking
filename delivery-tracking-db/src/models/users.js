'use sctrict'

module.exports = function setupUserModel(client) {
  const TABLE = 'users'

  async function createOrUpdate(user) {
    let values, query

    if (user.id) {
      let exits = await findById(user.id)

      if (exits) {
        values = [user.uuid, user.name, user.phone_number, user.geolocation]
        query = `UPDATE ${TABLE} SET uuid=$1, name=$2, phone_number=$3, geolocation=$4 WHERE id = ${user.id} RETURNING *`

        return client
          .query(query, values)
          .then((result) => result.rows)
          .catch(handleError)
      }
    }

    values = [user.uuid, user.name, user.phone_number, user.geolocation]

    query = `INSERT INTO ${TABLE}(uuid, name, phone_number, geolocation) VALUES($1, $2, $3, $4) RETURNING *`

    return client
      .query(query, values)
      .then((result) => result.rows)
      .catch(handleError)
  }

  async function findById(userId) {
    return client
      .query(`SELECT * FROM ${TABLE} WHERE id = ${userId} LIMIT 1`)
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
