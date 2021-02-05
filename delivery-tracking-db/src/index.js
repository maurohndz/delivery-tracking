'use sctrict'

const defaults = require('defaults')
require('debug')('delivery-tracking:db')

const setupDatabasePostgresql = require('./lib/postgresql')

const setupRestaurantModel = require('./models/restaurants')

module.exports = async function setupModule(config) {
  config = defaults(config, {
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  })

  const client = await setupDatabasePostgresql(config)

  const Restaurant = setupRestaurantModel(client)

  const pop = await Restaurant.createOrUpdate({
    name: 'Barola Burger 3',
    phone_number: '+584145326572',
    geolocation: '(4,3)',
    uuid: '9b1h2b4d-3b7d-4bad-9bdd-2b0d7b9lop6d',
  })
  console.log(pop)
}
