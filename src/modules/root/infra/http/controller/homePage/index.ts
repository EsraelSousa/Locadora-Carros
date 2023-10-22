import { type Request, type Response } from 'express'

import { type IController } from '@shared/protocols/IController'

export class HomePageController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const { name, email } = request.session.profile

    const data = {
      name,
      email
    }

    response.render('home', data)
  }
}
