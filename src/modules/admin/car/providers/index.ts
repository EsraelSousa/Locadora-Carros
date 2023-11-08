import { container } from 'tsyringe'

import { CarRepository } from '../infra/db/prisma/repositories/CarRepository'
import { type ICarRepository } from '../repositories/ICarRepository'

container.registerSingleton<ICarRepository>('CarRepository', CarRepository)
