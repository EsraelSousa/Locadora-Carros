import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { CreateRentService } from '@modules/admin/rent/services/createRent/CreateRentService'
import { type IController } from '@shared/protocols/IController'

export class CreateRentController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const { license_plate, expected_return, start_date, cpf } = request.body

    const createRentService = container.resolve(CreateRentService)

    await createRentService.execute({
      license_plate,
      expected_return,
      start_date,
      cpf,
      created_by: 1
    })

    response.redirect('/admin/rent')
  }
}
