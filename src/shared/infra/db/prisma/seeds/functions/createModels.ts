import { prisma } from '../../client'

export async function createModels(created_by: number): Promise<void> {
  await prisma.carModel.createMany({
    data: [
      {
        name: 'Celta',
        brand_id: 1,
        created_by
      },
      {
        name: 'Corsa',
        brand_id: 1,
        created_by
      },
      {
        name: 'Cruze',
        brand_id: 1,
        created_by
      },
      {
        name: 'Onix',
        brand_id: 1,
        created_by
      },
      {
        name: 'Palio',
        brand_id: 2,
        created_by
      },
      {
        name: 'Punto',
        brand_id: 2,
        created_by
      },
      {
        name: 'Uno',
        brand_id: 2,
        created_by
      },
      {
        name: 'EcoSport',
        brand_id: 3,
        created_by
      },
      {
        name: 'Fiesta',
        brand_id: 3,
        created_by
      },
      {
        name: 'Focus',
        brand_id: 3,
        created_by
      },
      {
        name: 'Fusion',
        brand_id: 3,
        created_by
      },
      {
        name: 'HR-V',
        brand_id: 4,
        created_by
      },
      {
        name: 'Civic',
        brand_id: 4,
        created_by
      },
      {
        name: 'Creta',
        brand_id: 5,
        created_by
      },
      {
        name: 'HB 20',
        brand_id: 5,
        created_by
      },
      {
        name: 'Tucson',
        brand_id: 5,
        created_by
      },
      {
        name: 'Kwid',
        brand_id: 6,
        created_by
      },
      {
        name: 'Corolla',
        brand_id: 7,
        created_by
      },
      {
        name: 'Hilux',
        brand_id: 7,
        created_by
      },
      {
        name: 'Yaris',
        brand_id: 7,
        created_by
      },
      {
        name: 'Polo',
        brand_id: 8,
        created_by
      },
      {
        name: 'Jetta',
        brand_id: 8,
        created_by
      },
      {
        name: 'Gol',
        brand_id: 8,
        created_by
      },
      {
        name: 'Fox',
        brand_id: 8,
        created_by
      }
    ]
  })
}
