import { type ICreateRentDTO } from '@modules/admin/rent/dtos/ICreateRentDTO'
import { type IRentRepository } from '@modules/admin/rent/repositories/IRentRepository'
import { type Rental } from '@prisma/client'
import { prisma } from '@shared/infra/db/prisma/client'

export class RentRepository implements IRentRepository {
  async create({
    car_id,
    costumer_id,
    expected_return,
    start_date,
    created_by
  }: ICreateRentDTO): Promise<Rental> {
    const rent = await prisma.rental.create({
      data: {
        car_id,
        costumer_id,
        start_date: new Date(start_date),
        expected_return: new Date(expected_return),
        created_by
      }
    })

    return rent
  }

  async list(): Promise<any[]> {
    const rentals = await prisma.rental.findMany({
      select: {
        id: true,
        start_date: true,
        expected_return: true,
        Car: {
          select: {
            license_plate: true,
            CarBrand: {
              select: {
                name: true
              }
            },
            CarModel: {
              select: {
                name: true
              }
            }
          }
        },
        Costumer: {
          select: {
            name: true
          }
        }
      }
    })

    return rentals
  }
}
