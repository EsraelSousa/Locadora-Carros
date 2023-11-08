export interface IListCarModelsResponseDTO {
  id: number
  name: string
  CarModel: Array<{
    id: number
    name: string
  }>
}
