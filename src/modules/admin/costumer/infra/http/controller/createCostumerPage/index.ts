import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { CreateCostumerPageService } from '@modules/admin/costumer/services/createCostumerPage'

export class CreateCostumerPageController {
  async handle(request: Request, response: Response): Promise<void> {
    const createCostumerPageService = container.resolve(
      CreateCostumerPageService
    )

    const data = await createCostumerPageService.execute()

    response.render('admin/costumer/create', data)
  }
}
