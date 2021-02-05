'use sctrict'

const defaults = require('defaults')
require('debug')('delivery-tracking:db')

const setupDatabasePostgresql = require('./lib/postgresql')

const setupRestaurantModel = require('./models/restaurants')
const setupUserModel = require('./models/users')

module.exports = async function setupModule(config) {
  config = defaults(config, {
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  })

  const client = await setupDatabasePostgresql(config)

  const RestaurantModel = setupRestaurantModel(client)
  const UserModel = setupUserModel(client)

  return {
    RestaurantModel,
    UserModel,
  }
}
