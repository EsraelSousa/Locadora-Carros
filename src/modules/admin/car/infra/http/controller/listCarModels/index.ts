import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { ListCarModelService } from '@modules/admin/car/services/listCarModels'
import { type IController } from '@shared/protocols/IController'

export class ListCarModelsController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand_id } = request.params

    const listCarModelService = container.resolve(ListCarModelService)

    const data = await listCarModelService.execute(parseInt(brand_id))

    return response.status(200).json(data)
  }
}
