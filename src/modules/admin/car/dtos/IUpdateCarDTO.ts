export interface IUpdateCarDTO {
  id: number
  brand_id: number
  model_id: number
  license_plate: string
  daily_rate: number
  fine_amount: number
  optionals: number[]
  created_by: number
}
