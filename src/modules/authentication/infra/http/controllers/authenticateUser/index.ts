import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { AuthenticateUserService } from '@modules/authentication/services/authenticateUser'
import { type IController } from '@shared/protocols/IController'

export class AuthenticateUserController implements IController {
  async handle(request: Request, response: Response): Promise<void> {
    const { email, password } = request.body

    const authenticationService = container.resolve(AuthenticateUserService)

    const data = await authenticationService.execute({ email, password })

    if (data.errorMessage) {
      response.render('login', data)
    } else {
      request.session.profile = {
        id: data.id,
        name: data.name,
        email: data.email
      }

      response.redirect('/')
    }
  }
}
