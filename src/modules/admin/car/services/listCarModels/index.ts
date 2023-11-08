import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICarRepository } from '../../repositories/ICarRepository'

@injectable()
export class ListCarModelService implements IService {
  constructor(
    @inject('CarRepository')
    private readonly carRepository: ICarRepository
  ) {}

  async execute(brand_id: number): Promise<object> {
    const models = await this.carRepository.listModels(brand_id)

    return {
      models
    }
  }
}
