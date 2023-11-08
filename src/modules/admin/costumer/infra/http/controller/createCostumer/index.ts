import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { CreateCostumerService } from '@modules/admin/costumer/services/createCostumer'
import { type IController } from '@shared/protocols/IController'

export class CreateCostumerController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const {
      name,
      email,
      cpf,
      phone,
      driver_license,
      driver_license_category,
      address,
      number,
      complement,
      city,
      state,
      zip_code
    } = request.body
    const createCostumerService = container.resolve(CreateCostumerService)

    await createCostumerService.execute({
      name,
      email,
      cpf,
      phone,
      driver_license,
      driver_license_category,
      address,
      number,
      complement,
      city,
      state,
      zip_code,
      created_by: 1
    })

    response.redirect('/admin/costumer')
  }
}
