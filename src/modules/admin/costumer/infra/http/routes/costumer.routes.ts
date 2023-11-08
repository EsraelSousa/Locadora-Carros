import { Router } from 'express'

import { CreateCostumerController } from '../controller/createCostumer'
import { CreateCostumerPageController } from '../controller/createCostumerPage'
import { EditCostumerController } from '../controller/editCostumer'
import { EditCostumerPageController } from '../controller/editCostumerPage'
import { FindCostumerController } from '../controller/findCostumer'
import { ListCostumersPageController } from '../controller/listCostumersPage'

const createCostumerPageController = new CreateCostumerPageController()
const listCostumersPageController = new ListCostumersPageController()
const editCostumerPageController = new EditCostumerPageController()

const createCostumerController = new CreateCostumerController()
const editCostumerController = new EditCostumerController()
const findCostumerController = new FindCostumerController()

const costumerRouter = Router()

costumerRouter.get('/', listCostumersPageController.handle)
costumerRouter.get('/create', createCostumerPageController.handle)
costumerRouter.post('/create', createCostumerController.handle)
costumerRouter.get('/edit/:user_id', editCostumerPageController.handle)
costumerRouter.post('/edit/', editCostumerController.handle)
costumerRouter.get('/:cpf', findCostumerController.handle)

export { costumerRouter }
