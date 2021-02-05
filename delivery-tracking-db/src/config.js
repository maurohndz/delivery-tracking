'use sctrict'

module.exports = {
  credentials: {
    user: process.env.POSTGRESQL_USER || 'deliveryTracking',
    host: process.env.POSTGRESQL_HOST || 'localhost',
    database: process.env.POSTGRESQL_DB || 'delivery-tracking',
    password: process.env.POSTGRESQL_PASSWORD || 'toor',
    port: process.env.POSTGRESQL_POST || 5432,
  },
}
