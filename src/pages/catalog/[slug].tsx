import { PrismaClient } from '@prisma/client'
import CarSinglePage from '../../components/Catalog/CarSinglePage'
import Head from 'next/head'

const prisma = new PrismaClient()

type car = {
  make: string
  model: string
  year: number
  slug: string
}
interface CarPageProps {
  car: car
  cars: car[]
}

export default function CarPage({ car, cars }: CarPageProps) {
  const min = 0
  const max = 34
  const rangeForFirstNum = max - min - 2
  const firstNumber = Math.floor(Math.random() * rangeForFirstNum) + min
  const secondNumber = firstNumber + 3
  return (
    <>
      <Head>
        <title>
          Купити {car.make} {car.model} {car.year}
        </title>
      </Head>
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
