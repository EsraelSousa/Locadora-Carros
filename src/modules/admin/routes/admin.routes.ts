import { Router } from 'express'

import { carRouter } from '../car/infra/http/routes/car.routes'
import { costumerRouter } from '../costumer/infra/http/routes/costumer.routes'

const adminRouter = Router()

adminRouter.use('/costumer', costumerRouter)
adminRouter.use('/car', carRouter)

export { adminRouter }
