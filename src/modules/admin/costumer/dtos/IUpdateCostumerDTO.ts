export interface IUpdateCostumerDTO {
  id: number
  name: string
  email: string
  cpf: string
  phone: string
  driver_license: string
  driver_license_category:
    | 'A'
    | 'AB'
    | 'AC'
    | 'AD'
    | 'AE'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
  address: string
  number: string
  complement?: string
  city: string
  state: string
  zip_code: string
}
