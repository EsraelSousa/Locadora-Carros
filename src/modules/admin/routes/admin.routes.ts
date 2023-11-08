import { Router } from 'express'

import { costumerRouter } from '../costumer/infra/http/routes/costumer.routes'

const adminRouter = Router()

adminRouter.use('/costumer', costumerRouter)

export { adminRouter }
