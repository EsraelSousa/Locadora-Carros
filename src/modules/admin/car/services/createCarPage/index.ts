import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICarRepository } from '../../repositories/ICarRepository'

@injectable()
export class CreateCarPageService implements IService {
  constructor(
    @inject('CarRepository')
    private readonly carRepository: ICarRepository
  ) {}

  async execute(): Promise<object> {
    const cars = await this.carRepository.listBrands()

    const optionals = await this.carRepository.listOptionals()

    return {
      cars,
      optionals
    }
  }
}
