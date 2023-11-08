import { BCryptHashProvider } from '@shared/container/providers/HashProvider/implementations/BCryptHashProvider'

import { prisma } from '../../client'

export async function createUser(): Promise<number> {
  const { hash } = new BCryptHashProvider()

  const name = 'Usuário de Teste'
  const email = 'test@provider.com'
  const password = await hash('test')

  const { id } = await prisma.user.upsert({
    where: {
      email
    },
    create: {
      name,
      email,
      password
    },
    update: {}
  })

  return id
}
