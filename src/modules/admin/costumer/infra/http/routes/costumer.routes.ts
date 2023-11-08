import { Router } from 'express'

import { CreateCostumerController } from '../controller/createCostumer'
import { CreateCostumerPageController } from '../controller/createCostumerPage'
import { ListCostumersPageController } from '../controller/listCostumersPage'

const createCostumerPageController = new CreateCostumerPageController()
const listCostumersPageController = new ListCostumersPageController()

const createCostumerController = new CreateCostumerController()

const costumerRouter = Router()

costumerRouter.get('/', listCostumersPageController.handle)
costumerRouter.get('/create', createCostumerPageController.handle)
costumerRouter.post('/create', createCostumerController.handle)

export { costumerRouter }
