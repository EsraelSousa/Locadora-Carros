export interface ICreateCostumerDTO {
  name: string
  email: string
  cpf: string
  phone: string
  password: string
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
  created_by: number
}
