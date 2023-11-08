import { type Rental } from '@prisma/client'

import { type ICreateRentDTO } from '../dtos/ICreateRentDTO'

export interface IRentRepository {
  create(data: ICreateRentDTO): Promise<Rental>
  list(): Promise<any[]>
}
