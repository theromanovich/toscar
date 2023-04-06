import Head from 'next/head'
import { Car } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import CarSinglePage from '../../components/Catalog/CarSinglePage'

const prisma = new PrismaClient()

interface CarPageProps {
  car: Car
  cars: Car[]
}

export default function CarPage({ car, cars }: CarPageProps) {
  const min: number = 0
  const max: number = 34
  const rangeForFirstNum: number = max - min - 2
  const firstNumber: number = Math.floor(Math.random() * rangeForFirstNum) + min
  const secondNumber: number = firstNumber + 3
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
  const car: Car = await prisma.car.findUnique({
    where: {
      slug: params.slug
    }
  })
  const cars: Car[] = await prisma.car.findMany({})

  return {
    props: {
      car,
      cars
    }
  }
}
