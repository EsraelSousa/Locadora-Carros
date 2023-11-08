import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { FindCostumerService } from '@modules/admin/costumer/services/findCostumer'
import { type IController } from '@shared/protocols/IController'

export class FindCostumerController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params

    const findCostumerService = container.resolve(FindCostumerService)

    const data = await findCostumerService.execute(cpf)

    return response.json(data)
  }
}
