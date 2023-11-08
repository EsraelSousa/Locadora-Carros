import { Router } from 'express'

import { adminRouter } from '@modules/admin/routes/admin.routes'
import { mainRouter } from '@modules/main/infra/http/routes/main.routes'

const routes = Router()

routes.use('/', mainRouter)
routes.use('/admin', adminRouter)

export { routes }
