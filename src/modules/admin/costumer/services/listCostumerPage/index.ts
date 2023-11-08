import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICostumerRepository } from '../../repositories/ICostumerRepository'

@injectable()
export class ListCostumerPageService implements IService {
  constructor(
    @inject('CostumerRepository')
    private readonly costumerRepository: ICostumerRepository
  ) {}

  async execute(search: string): Promise<object> {
    const costumers = await this.costumerRepository.list(search)

    return {
      costumers
    }
  }
}
