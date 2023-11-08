import { type ICreateCarDTO } from '@modules/admin/car/dtos/ICreateCarDTO'
import { type ICarRepository } from '@modules/admin/car/repositories/ICarRepository'
import {
  type CarModel,
  type CarBrand,
  type CarOptional,
  type Car
} from '@prisma/client'
import { prisma } from '@shared/infra/db/prisma/client'

export class CarRepository implements ICarRepository {
  async listBrands(): Promise<CarBrand[]> {
    const brands = await prisma.carBrand.findMany({
      orderBy: {
        name: 'asc'
      }
    })

    return brands
  }

  async listModels(brand_id: number): Promise<CarModel[]> {
    const models = await prisma.carModel.findMany({
      where: {
        brand_id
      },
      orderBy: {
        name: 'asc'
      }
    })

    return models
  }

  async listOptionals(): Promise<CarOptional[]> {
    const optionals = await prisma.carOptional.findMany({
      orderBy: {
        name: 'asc'
      }
    })

    return optionals
  }

  async create({
    brand_id,
    model_id,
    license_plate,
    daily_rate,
    fine_amount,
    optionals,
    created_by
  }: ICreateCarDTO): Promise<Car> {
    const car = await prisma.car.create({
      data: {
        brand_id,
        model_id,
        license_plate,
        daily_rate,
        fine_amount,
        status: 'available',
        CarOptional: {
          createMany: {
            data: optionals.map(optional_id => ({
              optional_id,
              created_by
            })),
            skipDuplicates: true
          }
        }
      }
    })

    return car
  }
}
