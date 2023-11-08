import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICarRepository } from '../../repositories/ICarRepository'
@injectable()
export class FindCarByPlateService implements IService {
  constructor(
    @inject('CarRepository')
    private readonly carRepository: ICarRepository
  ) {}

  async execute(license_plate: string): Promise<object> {
    const car = await this.carRepository.findByPlate(license_plate)

    interface IOptional {
      CarOptional: {
        name: string
      }
    }

    const mappedCar = {
      name: `${car.CarBrand.name} ${car.CarModel.name}`,
      daily_rate: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(car.daily_rate),
      fine_amount: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(car.fine_amount),
      optionals: car.CarOptional.map((item: IOptional) => {
        return item.CarOptional.name
      })
    }

    return mappedCar
  }
}
