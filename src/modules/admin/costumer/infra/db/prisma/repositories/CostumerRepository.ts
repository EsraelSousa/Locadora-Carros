import { type ICreateCostumerDTO } from '@modules/admin/costumer/dtos/ICreateCostumerDTO'
import { type IUpdateCostumerDTO } from '@modules/admin/costumer/dtos/IUpdateCostumerDTO'
import { type ICostumerRepository } from '@modules/admin/costumer/repositories/ICostumerRepository'
import { type Costumer } from '@prisma/client'
import { prisma } from '@shared/infra/db/prisma/client'

export class CostumerRepository implements ICostumerRepository {
  async create({
    name,
    email,
    cpf,
    phone,
    password,
    driver_license,
    driver_license_category,
    address,
    number,
    complement,
    city,
    state,
    zip_code,
    created_by
  }: ICreateCostumerDTO): Promise<Costumer> {
    const costumer = await prisma.costumer.create({
      data: {
        name,
        email,
        cpf,
        phone,
        password,
        driver_license,
        driver_license_category,
        address,
        number,
        complement,
        city,
        state,
        zip_code,
        created_by
      }
    })

    return costumer
  }

  async findByEmail(email: string): Promise<Costumer | null> {
    const costumer = await prisma.costumer.findUnique({
      where: {
        email
      }
    })

    return costumer
  }

  async findByCpf(cpf: string): Promise<Costumer | null> {
    const costumer = await prisma.costumer.findUnique({
      where: {
        cpf
      }
    })

    return costumer
  }

  async findByDriverLicense(driver_license: string): Promise<Costumer | null> {
    const costumer = await prisma.costumer.findUnique({
      where: {
        driver_license
      }
    })

    return costumer
  }

  async list(search?: string): Promise<Costumer[]> {
    if (search === 'undefined') {
      const costumers = await prisma.costumer.findMany()

      return costumers
    }

    let where = {}

    if (search) {
      where = {
        OR: [
          {
            name: search
          },
          {
            email: search
          },
          {
            cpf: search.replace(/\D/g, '')
          }
        ]
      }
    }

    const costumers = await prisma.costumer.findMany({
      where
    })

    return costumers
  }

  async findById(id: number): Promise<Costumer | null> {
    const costumer = await prisma.costumer.findUnique({
      where: {
        id
      }
    })

    return costumer
  }

  async update({
    id,
    name,
    email,
    cpf,
    phone,
    driver_license,
    driver_license_category,
    address,
    number,
    complement,
    city,
    state,
    zip_code
  }: IUpdateCostumerDTO): Promise<Costumer | null> {
    const costumer = await prisma.costumer.update({
      where: {
        id
      },
      data: {
        name,
        email,
        cpf,
        phone,
        driver_license,
        driver_license_category,
        address,
        number,
        complement,
        city,
        state,
        zip_code
      }
    })

    return costumer
  }
}
