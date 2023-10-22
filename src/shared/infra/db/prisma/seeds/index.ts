import { appConfig } from '@config/app'

import { createUser } from './functions/createUser'

async function runSeeders(): Promise<void> {
  await createUser()
}

if (appConfig.enviroment === 'local') {
  void runSeeders()
}
