import { PrismaClient } from '@prisma/client'
import CarSinglePage from '@/components/Catalog/CarSinglePage'

const prisma = new PrismaClient()

export default function CarPage({ car, cars }) {
  const min = 0
  const max = 34
  const rangeForFirstNum = max - min - 2
  const firstNumber = Math.floor(Math.random() * rangeForFirstNum) + min
  const secondNumber = firstNumber + 3
  return (
    <>
      <div className='car-page'>
        <CarSinglePage car={car} cars={cars.slice(firstNumber, secondNumber)} />
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const car = await prisma.car.findUnique({
    where: {
      slug: params.slug
    }
  })
  const cars = await prisma.car.findMany({})

  return {
    props: {
      car,
      cars
    }
  }
}
