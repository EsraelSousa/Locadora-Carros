import { Router } from 'express'

import { carRouter } from '../car/infra/http/routes/car.routes'
import { costumerRouter } from '../costumer/infra/http/routes/costumer.routes'
import { rentRouter } from '../rent/infra/http/routes/rent.routes'

const adminRouter = Router()

adminRouter.use('/costumer', costumerRouter)
adminRouter.use('/car', carRouter)
adminRouter.use('/rent', rentRouter)

export { adminRouter }
