import { Router } from 'express'

import { AuthenticatePageController } from '../controllers/authenticatePage'
import { AuthenticateUserController } from '../controllers/authenticateUser'

const authenticatePageController = new AuthenticatePageController()
const authenticateUserController = new AuthenticateUserController()

const authenticationRouter = Router()

authenticationRouter.get('/', authenticatePageController.handle)
authenticationRouter.post('/', authenticateUserController.handle)

export { authenticationRouter }
