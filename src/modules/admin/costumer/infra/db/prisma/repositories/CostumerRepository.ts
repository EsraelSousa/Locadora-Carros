import { type ICreateCostumerDTO } from '@modules/admin/costumer/dtos/ICreateCostumerDTO'
import { type ICostumerRepository } from '@modules/admin/costumer/repositories/ICostumerRepository'
import { type Costumer } from '@prisma/client'
import { prisma } from '@shared/infra/db/prisma/client'

export class CostumerRepository implements ICostumerRepository {
  async create({
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
    zip_code,
    created_by
  }: ICreateCostumerDTO): Promise<Costumer> {
    const costumer = await prisma.costumer.create({
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
}
