import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { ICostumerRepository } from '../../repositories/ICostumerRepository'

@injectable()
export class FindCostumerService implements IService {
  constructor(
    @inject('CostumerRepository')
    private readonly costumerRepository: ICostumerRepository
  ) {}

  async execute(cpf: string): Promise<object> {
    const user = await this.costumerRepository.findByCpf(cpf.replace(/\D/g, ''))

    if (!user) {
      return {
        error: 'Não existe nenhum cliente com o CPF informado.'
      }
    }

    return user
  }
}
