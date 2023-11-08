import { Router } from 'express'

import { CreateRentController } from '../controller/createRent'
import { CreateRentPageController } from '../controller/createRentPage'
import { ListRentalsPageController } from '../controller/listRentalsPage'

const listRentalsPageController = new ListRentalsPageController()
const createRentalPageController = new CreateRentPageController()

const createRentController = new CreateRentController()

const rentRouter = Router()

rentRouter.get('/', listRentalsPageController.handle)
rentRouter.get('/create', createRentalPageController.handle)
rentRouter.post('/create', createRentController.handle)

export { rentRouter }
