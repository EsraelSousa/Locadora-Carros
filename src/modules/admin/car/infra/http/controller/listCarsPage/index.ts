import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { ListCarPageService } from '@modules/admin/car/services/listCarsPage'
import { type IController } from '@shared/protocols/IController'

export class ListCarPageController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const { search } = request.query

    const listCarPageService = container.resolve(ListCarPageService)

    const data = await listCarPageService.execute(String(search))

    response.render('admin/car', data)
  }
}
