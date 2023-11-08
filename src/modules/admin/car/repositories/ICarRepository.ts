import {
  type CarModel,
  type CarBrand,
  type CarOptional,
  type Car
} from '@prisma/client'

import { type ICreateCarDTO } from '../dtos/ICreateCarDTO'
import { type IUpdateCarDTO } from '../dtos/IUpdateCarDTO'

export interface ICarRepository {
  listBrands(): Promise<CarBrand[]>
  listModels(brand_id: number): Promise<CarModel[]>
  listOptionals(): Promise<CarOptional[]>
  create(data: ICreateCarDTO): Promise<Car>
  list(search?: string): Promise<any[]>
  findById(car_id: number): Promise<any | null>
  update(data: IUpdateCarDTO): Promise<any>
  findByPlate(license_plate: string): Promise<any | null>
}
