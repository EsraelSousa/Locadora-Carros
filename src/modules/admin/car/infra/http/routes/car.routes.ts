import { Router } from 'express'

import { CreateCarController } from '../controller/createCar'
import { CreateCarPageController } from '../controller/createCarPage'
import { ListCarModelsController } from '../controller/listCarModels'
import { ListCarPageController } from '../controller/listCarsPage'

const listCarPageController = new ListCarPageController()
const createCarPageController = new CreateCarPageController()

const listCarModelsController = new ListCarModelsController()
const createCarController = new CreateCarController()

const carRouter = Router()

carRouter.get('/', listCarPageController.handle)
carRouter.get('/create', createCarPageController.handle)
carRouter.post('/create', createCarController.handle)
carRouter.get('/models/:brand_id', listCarModelsController.handle)

export { carRouter }
