import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { FindCarByPlateService } from '@modules/admin/car/services/findByPlate'
import { type IController } from '@shared/protocols/IController'

export class FindCarByPlateController implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { license_plate } = request.params

    const findCarByPlateService = container.resolve(FindCarByPlateService)

    const data = await findCarByPlateService.execute(license_plate)

    return response.json(data)
  }
}
