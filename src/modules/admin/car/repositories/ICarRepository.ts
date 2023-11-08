import {
  type CarModel,
  type CarBrand,
  type CarOptional,
  type Car
} from '@prisma/client'

import { type ICreateCarDTO } from '../dtos/ICreateCarDTO'

export interface ICarRepository {
  listBrands(): Promise<CarBrand[]>
  listModels(brand_id: number): Promise<CarModel[]>
  listOptionals(): Promise<CarOptional[]>
  create(data: ICreateCarDTO): Promise<Car>
}
