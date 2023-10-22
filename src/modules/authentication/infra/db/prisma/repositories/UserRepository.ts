import { type IUserRepository } from '@modules/authentication/repositories/IUserRepository'
import { type User } from '@prisma/client'
import { prisma } from '@shared/infra/db/prisma/client'

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  }
}
