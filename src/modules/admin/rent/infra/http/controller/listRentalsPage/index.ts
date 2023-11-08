import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { ListRentalsPageService } from '@modules/admin/rent/services/listRentalsPage'
import { type IController } from '@shared/protocols/IController'

export class ListRentalsPageController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const listRentalsPageService = container.resolve(ListRentalsPageService)

    const data = await listRentalsPageService.execute()

    response.render('admin/rent', { data })
  }
}
