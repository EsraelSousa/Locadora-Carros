import { compare, hash } from 'bcrypt'

import { type IHashProvider } from '../models/IHashProvider'

export class BCryptHashProvider implements IHashProvider {
  async hash(payload: string): Promise<string> {
    const hashedValue = await hash(payload, 8)

    return hashedValue
  }

  async compare(payload: string, hash: string): Promise<boolean> {
    const isHashEqual = await compare(payload, hash)

    return isHashEqual
  }
}
