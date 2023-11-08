import { appConfig } from '@config/app'

import { createBrands } from './functions/createBrands'
import { createOptionals } from './functions/createCarOptionals'
import { createModels } from './functions/createModels'
import { createUser } from './functions/createUser'

async function runSeeders(): Promise<void> {
  const id = await createUser()
  await createOptionals(id)
  await createBrands(id)
  await createModels(id)
}

if (appConfig.enviroment === 'local') {
  void runSeeders()
}
