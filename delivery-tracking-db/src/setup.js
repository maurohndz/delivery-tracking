'use sctrict'

const { credentials } = require('./config')
const setupModule = require('./index')

async function setup() {
  const { UserModel } = await setupModule(credentials)

  const user = await UserModel.updateGeolocation(1, '(0,0)')
  console.log(user)

  process.exit(1)
}

setup()
