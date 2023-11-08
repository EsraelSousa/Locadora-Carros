import { injectable } from 'tsyringe'

import { type IService } from '@shared/protocols/IService'

@injectable()
export class ListCarPageService implements IService {
  async execute(search: string): Promise<object> {
    return {}
  }
}
