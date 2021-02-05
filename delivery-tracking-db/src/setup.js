'use sctrict'

const { credentials } = require('./config')
const setupModule = require('./index')

async function setup() {
  setupModule(credentials)
}

setup()
