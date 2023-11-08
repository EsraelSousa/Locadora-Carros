import { container } from 'tsyringe'

import { CostumerRepository } from '../infra/db/prisma/repositories/CostumerRepository'
import { type ICostumerRepository } from '../repositories/ICostumerRepository'

container.registerSingleton<ICostumerRepository>(
  'CostumerRepository',
  CostumerRepository
)
