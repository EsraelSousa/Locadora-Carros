import { BCryptHashProvider } from '@modules/authentication/providers/HashProvider/implementations/BCryptHashProvider'

import { prisma } from '../../client'

export async function createUser(): Promise<void> {
  const { hash } = new BCryptHashProvider()

  const name = 'Usuário de Teste'
  const email = 'test@provider.com'
  const password = await hash('test')

  await prisma.user.upsert({
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
}
