import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICarRepository } from '../../repositories/ICarRepository'

interface IRequest {
  brand_id: number
  model_id: number
  license_plate: string
  daily_rate: number
  fine_amount: number
  optionals: number[]
  created_by: number
}

@injectable()
export class CreateCarService implements IService {
  constructor(
    @inject('CarRepository')
    private readonly carRepository: ICarRepository
  ) {}

  async execute({
    brand_id,
    model_id,
    license_plate,
    daily_rate,
    fine_amount,
    optionals,
    created_by
  }: IRequest): Promise<object> {
    const car = await this.carRepository.create({
      brand_id,
      model_id,
      license_plate,
      daily_rate,
      fine_amount,
      optionals,
      created_by
    })

    return {
      car
    }
  }
}
