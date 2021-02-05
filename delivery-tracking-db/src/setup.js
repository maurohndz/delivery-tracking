'use sctrict'

const { credentials } = require('./config')
const setupModule = require('./index')

async function setup() {
  await setupModule(credentials)
  process.exit(1)
}

setup()
