import { type ICreateCarDTO } from '@modules/admin/car/dtos/ICreateCarDTO'
import { type IUpdateCarDTO } from '@modules/admin/car/dtos/IUpdateCarDTO'
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

  async list(search?: string): Promise<any[]> {
    if (search === 'undefined') {
      const cars = await prisma.car.findMany({
        select: {
          id: true,
          license_plate: true,
          status: true,
          daily_rate: true,
          fine_amount: true,
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
      })

      return cars
    }

    const cars = await prisma.car.findMany({
      select: {
        id: true,
        license_plate: true,
        status: true,
        daily_rate: true,
        fine_amount: true,
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
      },
      where: {
        license_plate: {
          contains: search
        }
      }
    })

    return cars
  }

  async findById(car_id: number): Promise<any | null> {
    const car = await prisma.car.findUnique({
      where: {
        id: car_id
      },
      include: {
        CarOptional: {
          select: {
            optional_id: true
          }
        }
      }
    })

    return car
  }

  async update({
    id,
    brand_id,
    model_id,
    license_plate,
    daily_rate,
    fine_amount,
    optionals,
    created_by
  }: IUpdateCarDTO): Promise<any> {
    await prisma.optionalOnCar.deleteMany({
      where: {
        car_id: id
      }
    })

    const car = await prisma.car.update({
      where: {
        id
      },
      data: {
        brand_id,
        model_id,
        license_plate,
        daily_rate,
        fine_amount,
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
