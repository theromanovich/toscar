import { Car } from '@prisma/client'

const paginate = (cars: Car[]) => {
  const itemsPerPage = 8
  const pages = Math.ceil(cars.length / itemsPerPage)

  const newCars = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return cars.slice(start, start + itemsPerPage)
  })

  return newCars
}

export default paginate
