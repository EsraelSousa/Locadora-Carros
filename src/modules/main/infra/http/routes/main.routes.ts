import { Router } from 'express'

import { HomePageController } from '../controller/homePage'
import { LoginPageController } from '../controller/loginPage'

const homePageController = new HomePageController()
const loginPageController = new LoginPageController()

const mainRouter = Router()

mainRouter.get('/', homePageController.handle)
mainRouter.get('/login', loginPageController.handle)

export { mainRouter }
