import { container } from 'tsyringe'

import { RentRepository } from '../infra/db/prisma/repositories/RentRepository'
import { type IRentRepository } from '../repositories/IRentRepository'

container.registerSingleton<IRentRepository>('RentRepository', RentRepository)
