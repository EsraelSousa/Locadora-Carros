import { prisma } from '../../client'

export async function createBrands(created_by: number): Promise<void> {
  await prisma.carBrand.createMany({
    data: [
      {
        name: 'Chevrolet',
        created_by
      },
      {
        name: 'Fiat',
        created_by
      },
      {
        name: 'Ford',
        created_by
      },
      {
        name: 'Honda',
        created_by
      },
      {
        name: 'Hyundai',
        created_by
      },
      {
        name: 'Renault',
        created_by
      },
      {
        name: 'Toyota',
        created_by
      },
      {
        name: 'Volkswagen',
        created_by
      }
    ]
  })
}
