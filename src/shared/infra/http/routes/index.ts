import { Router } from 'express'

import { authenticationRouter } from '@modules/authentication/infra/http/routes/authentication.routes'
import { rootRouter } from '@modules/root/infra/http/routes/root.routes'

const routes = Router()

routes.use('/login', authenticationRouter)
routes.use('/', rootRouter)

export { routes }
