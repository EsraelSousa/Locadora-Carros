import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { CreateCarPageService } from '@modules/admin/car/services/createCarPage'
import { type IController } from '@shared/protocols/IController'

export class CreateCarPageController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const createCarPageService = container.resolve(CreateCarPageService)

    const data = await createCarPageService.execute()

    console.log(data)

    response.render('admin/car/create', data)
  }
}
