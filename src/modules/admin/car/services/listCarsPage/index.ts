import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICarRepository } from '../../repositories/ICarRepository'

@injectable()
export class ListCarPageService implements IService {
  constructor(
    @inject('CarRepository')
    private readonly carRepository: ICarRepository
  ) {}

  async execute(search: string): Promise<object> {
    const cars = await this.carRepository.list(search)

    const mappedData = cars.map(car => {
      return {
        id: car.id,
        brand: car.CarBrand.name,
        model: car.CarModel.name,
        license_plate: car.license_plate,
        status: car.status === 'available' ? 'Disponível' : 'Indisponível',
        daily_rate: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(car.daily_rate),
        fine_amount: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(car.fine_amount)
      }
    })

    return {
      cars: mappedData
    }
  }
}
