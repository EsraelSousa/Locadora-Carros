import { DriverLicenceCategory } from '@prisma/client'
import { type IService } from '@shared/protocols/IService'

export class CreateCostumerPageService implements IService {
  async execute(): Promise<object> {
    const driver_license_category = DriverLicenceCategory

    return {
      driver_license_categories: Object.keys(driver_license_category).map(
        key => {
          return key
        }
      )
    }
  }
}
