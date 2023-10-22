import { Router } from 'express'

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated'

import { HomePageController } from '../controller/homePage'

const homePageController = new HomePageController()

const rootRouter = Router()

rootRouter.get('/', ensureAuthenticated, homePageController.handle)

export { rootRouter }
