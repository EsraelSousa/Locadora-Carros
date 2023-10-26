import { Router } from 'express'

import { HomePageController } from '../controller/homePage'

const homePageController = new HomePageController()

const rootRouter = Router()

rootRouter.get('/', homePageController.handle)

export { rootRouter }
