import { Car } from '@prisma/client'
import { Star, NoStar } from '../components/Review/ReviewStars'

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

export const getStars = (rating: number) => {
  switch (rating) {
    case 1:
      return (
        <>
          <Star />
          <NoStar />
          <NoStar />
          <NoStar />
          <NoStar />
        </>
      )
    case 2:
      return (
        <>
          <Star />
          <Star />
          <NoStar />
          <NoStar />
          <NoStar />
        </>
      )
    case 3:
      return (
        <>
          <Star />
          <Star />
          <Star />
          <NoStar />
          <NoStar />
        </>
      )
    case 4:
      return (
        <>
          <Star />
          <Star />
          <Star />
          <Star />
          <NoStar />
        </>
      )
    case 5:
      return (
        <>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </>
      )
  }
}
