import { Router } from 'express'

import { CreateCarController } from '../controller/createCar'
import { CreateCarPageController } from '../controller/createCarPage'
import { EditCarController } from '../controller/editCar'
import { EditCarPageController } from '../controller/editCarPage'
import { ListCarModelsController } from '../controller/listCarModels'
import { ListCarPageController } from '../controller/listCarsPage'

const listCarPageController = new ListCarPageController()
const createCarPageController = new CreateCarPageController()
const editCarPageController = new EditCarPageController()

const listCarModelsController = new ListCarModelsController()
const createCarController = new CreateCarController()
const editCarController = new EditCarController()

const carRouter = Router()

carRouter.get('/', listCarPageController.handle)
carRouter.get('/create', createCarPageController.handle)
carRouter.post('/create', createCarController.handle)
carRouter.get('/models/:brand_id', listCarModelsController.handle)
carRouter.get('/edit/:car_id', editCarPageController.handle)
carRouter.post('/edit', editCarController.handle)

export { carRouter }
