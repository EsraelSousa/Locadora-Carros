import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { EditCostumerService } from '@modules/admin/costumer/services/editCostumer'
import { type IController } from '@shared/protocols/IController'

export class EditCostumerController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const {
      id,
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

    const editCostumerService = container.resolve(EditCostumerService)

    await editCostumerService.execute({
      id: parseInt(id),
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
    })

    response.redirect('/admin/costumer')
  }
}
