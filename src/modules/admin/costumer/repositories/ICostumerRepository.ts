import { type Costumer } from '@prisma/client'

import { type ICreateCostumerDTO } from '../dtos/ICreateCostumerDTO'

export interface ICostumerRepository {
  create(data: ICreateCostumerDTO): Promise<Costumer>
  findByEmail(email: string): Promise<Costumer | null>
  findByCpf(cpf: string): Promise<Costumer | null>
  findByDriverLicense(driver_license: string): Promise<Costumer | null>
}
