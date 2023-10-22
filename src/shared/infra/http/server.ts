import { createServer } from 'http'

import { appConfig } from '@config/app'

import { app } from './app'

export const server = createServer(app)

server.listen(appConfig.port, () => {
  console.log(`Server is running on port ${appConfig.port}`)
})
