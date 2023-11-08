import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { CreateCarService } from '@modules/admin/car/services/createCar'
import { type IController } from '@shared/protocols/IController'

export class CreateCarController implements IController {
  async handle(request: Request, response: Response): Promise<any> {
    const {
      brand_id,
      model_id,
      license_plate,
      daily_rate,
      fine_amount,
      optional
    } = request.body

    const createCarService = container.resolve(CreateCarService)

    await createCarService.execute({
      brand_id: parseInt(brand_id),
      model_id: parseInt(model_id),
      license_plate,
      daily_rate: Number(daily_rate),
      fine_amount: Number(fine_amount),
      optionals: optional.map((optional: string) => parseInt(optional)),
      created_by: 1
    })

    response.redirect('/admin/car')
  }
}
