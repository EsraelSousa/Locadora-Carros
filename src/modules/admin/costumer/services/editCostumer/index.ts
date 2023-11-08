import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICostumerRepository } from '../../repositories/ICostumerRepository'

interface IRequest {
  id: number
  name: string
  email: string
  cpf: string
  phone: string
  driver_license: string
  driver_license_category:
    | 'A'
    | 'AB'
    | 'AC'
    | 'AD'
    | 'AE'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
  address: string
  number: string
  complement?: string
  city: string
  state: string
  zip_code: string
}

@injectable()
export class EditCostumerService implements IService {
  constructor(
    @inject('CostumerRepository')
    private readonly costumerRepository: ICostumerRepository
  ) {}

  async execute({
    id,
    name,
    email,
    cpf,
    phone,
    driver_license,
    driver_license_category,
    address,
    number,
    complement,
    city,
    state,
    zip_code
  }: IRequest): Promise<void> {
    await this.costumerRepository.update({
      id,
      name,
      email,
      cpf,
      phone,
      driver_license,
      driver_license_category,
      address,
      number,
      complement,
      city,
      state,
      zip_code
    })
  }
}
