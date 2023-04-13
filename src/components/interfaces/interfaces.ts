export interface Car {
  id: number
  slug: string
  main_image: string
  make: string
  model: string
  engine: string
  year: number
  body: string
  mileage: number
  drive: string
  gearbox: string
  price: number
  status: boolean
}

export interface NavElement {
  id: number
  title: string
  path: string
}
