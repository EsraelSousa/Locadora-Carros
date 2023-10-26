import { Router } from 'express'

import { rootRouter } from '@modules/main/infra/http/routes/root.routes'

const routes = Router()

routes.use('/', rootRouter)

export { routes }
