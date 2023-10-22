import { type IService } from 'shared/protocols/IService'
import { inject, injectable } from 'tsyringe'

import { IHashProvider } from '@modules/authentication/providers/HashProvider/models/IHashProvider'
import { IUserRepository } from '@modules/authentication/repositories/IUserRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  [key: string]: any
}

@injectable()
export class AuthenticateUserService implements IService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,

    @inject('HashProvider')
    private readonly hashProvider: IHashProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      return {
        errorMessage: 'E-mail ou senha incorretos'
      }
    }

    const passwordMatch = await this.hashProvider.compare(
      password,
      user.password
    )

    if (!passwordMatch) {
      return {
        errorMessage: 'E-mail ou senha incorretos'
      }
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }
}
