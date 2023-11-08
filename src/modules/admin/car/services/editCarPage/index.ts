import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICarRepository } from '../../repositories/ICarRepository'

@injectable()
export class EditCarPageService implements IService {
  constructor(
    @inject('CarRepository')
    private readonly carRepository: ICarRepository
  ) {}

  async execute(car_id: number): Promise<object> {
    const car = await this.carRepository.findById(car_id)

    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface CarOptional {
      optional_id: number
    }

    const formattedCar = {
      ...car,
      optionals: car.CarOptional.map(
        (optional: CarOptional) => optional.optional_id
      ).join(',')
    }

    const cars = await this.carRepository.listBrands()

    const optionals = await this.carRepository.listOptionals()

    return {
      car: formattedCar,
      cars,
      optionals
    }
  }
}
