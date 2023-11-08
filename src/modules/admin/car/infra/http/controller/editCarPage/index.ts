import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { EditCarPageService } from '@modules/admin/car/services/editCarPage/index'
import { type IController } from '@shared/protocols/IController'

export class EditCarPageController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const { car_id } = request.params

    const editCarPageService = container.resolve(EditCarPageService)

    const data = await editCarPageService.execute(parseInt(car_id))

    response.render('admin/car/edit', data)
  }
}
