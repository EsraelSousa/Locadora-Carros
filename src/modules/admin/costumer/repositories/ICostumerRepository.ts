import { type Costumer } from '@prisma/client'

import { type ICreateCostumerDTO } from '../dtos/ICreateCostumerDTO'
import { type IUpdateCostumerDTO } from '../dtos/IUpdateCostumerDTO'

export interface ICostumerRepository {
  create(data: ICreateCostumerDTO): Promise<Costumer>
  findByEmail(email: string): Promise<Costumer | null>
  findByCpf(cpf: string): Promise<Costumer | null>
  findByDriverLicense(driver_license: string): Promise<Costumer | null>
  list(search?: string): Promise<Costumer[]>
  findById(id: number): Promise<Costumer | null>
  update(data: IUpdateCostumerDTO): Promise<Costumer | null>
}
