import { Car } from '@prisma/client'

const paginate = (cars: Car[]) => {
  const itemsPerPage: number = 8
  const pages: number = Math.ceil(cars.length / itemsPerPage)

  const newCars: Car[][] = Array.from({ length: pages }, (_, index) => {
    const start: number = index * itemsPerPage
    return cars.slice(start, start + itemsPerPage)
  })

  return newCars
}

export default paginate
