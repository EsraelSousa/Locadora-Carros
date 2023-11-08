import { inject, injectable } from 'tsyringe'

import { ICarRepository } from '@modules/admin/car/repositories/ICarRepository'
import { ICostumerRepository } from '@modules/admin/costumer/repositories/ICostumerRepository'
import { type IService } from '@shared/protocols/IService'

import { IRentRepository } from '../../repositories/IRentRepository'

export interface IRequest {
  license_plate: string
  cpf: string
  start_date: string
  expected_return: string
  created_by: number
}

@injectable()
export class CreateRentService implements IService {
  constructor(
    @inject('RentRepository')
    private readonly rentRepository: IRentRepository,

    @inject('CarRepository')
    private readonly carRepository: ICarRepository,

    @inject('CostumerRepository')
    private readonly costumerRepository: ICostumerRepository
  ) {}

  async execute({
    license_plate,
    expected_return,
    start_date,
    cpf,
    created_by
  }: IRequest): Promise<object> {
    const costumer = await this.costumerRepository.findByCpf(
      cpf.replace(/\D/g, '')
    )

    if (!costumer) {
      return {
        error: 'Cliente não encontrado'
      }
    }

    const car = await this.carRepository.findByPlate(license_plate)

    if (!car) {
      return {
        error: 'Carro não encontrado'
      }
    }

    if (car.status === 'unavailable') {
      return {
        error: 'Carro indisponível'
      }
    }

    const rent = await this.rentRepository.create({
      car_id: car.id,
      expected_return,
      start_date,
      costumer_id: costumer.id,
      created_by
    })

    return rent
  }
}
