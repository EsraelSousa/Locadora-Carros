import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICostumerRepository } from '../../repositories/ICostumerRepository'

@injectable()
export class EditCostumerServicePage implements IService {
  constructor(
    @inject('CostumerRepository')
    private readonly costumerRepository: ICostumerRepository
  ) {}

  async execute(user_id: number): Promise<object> {
    const costumer = await this.costumerRepository.findById(user_id)

    if (!costumer) {
      throw new Error('Costumer not found')
    }

    return costumer
  }
}
