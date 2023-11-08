import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { EditCostumerServicePage } from '@modules/admin/costumer/services/editCostumerPage'
import { type IController } from '@shared/protocols/IController'

export class EditCostumerPageController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const { user_id } = request.params

    const editCostumerServicePage = container.resolve(EditCostumerServicePage)

    const data = await editCostumerServicePage.execute(parseInt(user_id))

    response.render('admin/costumer/edit', data)
  }
}
