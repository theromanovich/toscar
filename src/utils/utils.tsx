import { Car } from '@prisma/client'
import { Star, NoStar } from '../components/Review/ReviewStars'

const paginate = (cars: Car[]): Car[][] => {
  const itemsPerPage: number = 8
  const pages: number = Math.ceil(cars.length / itemsPerPage)

  const newCars: Car[][] = Array.from({ length: pages }, (_, index) => {
    const start: number = index * itemsPerPage
    return cars.slice(start, start + itemsPerPage)
  })

  return newCars
}

export default paginate

export const generateRandCars = (
  arr: Car[]
): { startIndex: number; endIndex: number } => {
  const min: number = 0
  const max: number = arr.length
  const rangeForFirstNum = max - min - 2
  const startIndex = Math.floor(Math.random() * rangeForFirstNum) + min
  const endIndex = startIndex + 3
  return { startIndex, endIndex }
}

export const getStars = (rating: number): JSX.Element => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(i < rating ? <Star key={i} /> : <NoStar key={i} />)
  }
  return <>{stars}</>
}
