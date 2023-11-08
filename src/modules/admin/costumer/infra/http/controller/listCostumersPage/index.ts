import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { ListCostumerPageService } from '@modules/admin/costumer/services/listCostumerPage'
import { type IController } from '@shared/protocols/IController'

export class ListCostumersPageController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const { search } = request.query

    const listCostumersPageService = container.resolve(ListCostumerPageService)

    const data = await listCostumersPageService.execute(String(search))

    response.render('admin/costumer', data)
  }
}
