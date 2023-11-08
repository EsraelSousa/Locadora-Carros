import { type Request, type Response } from 'express'

import { type IController } from '@shared/protocols/IController'

export class ListCostumersPageController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    response.render('admin/costumer')
  }
}
