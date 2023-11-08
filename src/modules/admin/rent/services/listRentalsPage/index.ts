import { inject, injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

import { IRentRepository } from '../../repositories/IRentRepository'

@injectable()
export class ListRentalsPageService implements IService {
  constructor(
    @inject('RentRepository')
    private readonly rentRepository: IRentRepository
  ) {}

  async execute(): Promise<object[]> {
    const rentals = await this.rentRepository.list()

    const data = rentals.map(rent => {
      return {
        ...rent,
        start_date: new Intl.DateTimeFormat('pt-BR').format(rent.start_date),
        expected_return: new Intl.DateTimeFormat('pt-BR').format(
          rent.expected_return
        )
      }
    })

    return data
  }
}
