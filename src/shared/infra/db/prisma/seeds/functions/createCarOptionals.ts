import { prisma } from '../../client'

export async function createOptionals(created_by: number): Promise<void> {
  await prisma.carOptional.createMany({
    data: [
      {
        name: '4 Portas',
        icon_path: '',
        created_by
      },
      {
        name: 'Vidro Elétrico',
        icon_path: '',
        created_by
      },
      {
        name: 'Ar condicionado',
        icon_path: '',
        created_by
      },
      {
        name: 'Trava Elétrica',
        icon_path: '',
        created_by
      },
      {
        name: 'Direção Hidráulica',
        icon_path: '',
        created_by
      },
      {
        name: 'Transmissão Automática',
        icon_path: '',
        created_by
      }
    ]
  })
}
