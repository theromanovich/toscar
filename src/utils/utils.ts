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

export const generateRandCars = () => {
  const min: number = 0
  const max: number = 34
  const rangeForFirstNum: number = max - min - 2
  const firstNumber: number = Math.floor(Math.random() * rangeForFirstNum) + min
  const secondNumber: number = firstNumber + 3
  return { firstNumber, secondNumber }
}
