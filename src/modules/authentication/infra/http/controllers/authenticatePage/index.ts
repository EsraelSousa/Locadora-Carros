import { type Request, type Response } from 'express'

import { type IController } from '@shared/protocols/IController'

export class AuthenticatePageController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    if (request.session.profile) {
      response.redirect('/')
    }
    response.render('login')
  }
}
