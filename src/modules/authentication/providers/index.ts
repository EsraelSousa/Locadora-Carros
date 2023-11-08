import { container } from 'tsyringe'

import { UserRepository } from '../infra/db/prisma/repositories/UserRepository'
import { type IUserRepository } from '../repositories/IUserRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
