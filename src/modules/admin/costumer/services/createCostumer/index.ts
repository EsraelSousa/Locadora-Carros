import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICostumerRepository } from '../../repositories/ICostumerRepository'

interface IRequest {
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
  created_by: number
}

@injectable()
export class CreateCostumerService implements IService {
  constructor(
    @inject('CostumerRepository')
    private readonly costumerRepository: ICostumerRepository
  ) {}

  async execute({
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
    zip_code,
    created_by
  }: IRequest): Promise<void> {
    const emailExists = await this.costumerRepository.findByEmail(email)

    if (emailExists) {
      throw new Error('Email already exists')
    }

    const cpfExists = await this.costumerRepository.findByCpf(cpf)

    if (cpfExists) {
      throw new Error('CPF already exists')
    }

    const driverLicenseExists =
      await this.costumerRepository.findByDriverLicense(driver_license)

    if (driverLicenseExists) {
      throw new Error('Driver license already exists')
    }

    await this.costumerRepository.create({
      name,
      email,
      cpf: cpf.replace(/\D/g, ''),
      phone,
      driver_license,
      driver_license_category,
      address,
      number,
      complement: complement === '' ? undefined : complement,
      city,
      state,
      zip_code,
      created_by
    })
  }
}
