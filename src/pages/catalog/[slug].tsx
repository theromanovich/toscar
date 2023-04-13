import Head from 'next/head'
import { Car } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import { generateRandCars } from '../../utils/utils'
import CarSinglePage from '../../components/Catalog/CarSinglePage'

const prisma = new PrismaClient()

interface CarPageProps {
  car: Car
  cars: Car[]
}

export default function CarPage({ car, cars }: CarPageProps) {
  const { startIndex, endIndex } = generateRandCars(cars)

  return (
    <>
      <Head>
        <title>
          Купити {car.make} {car.model} {car.year}
        </title>
        <meta
          name='description'
          content={`Купити ${car.make} ${car.model} ${car.year} зі США в Україні`}
        />
      </Head>
      <div className='car-page'>
        <CarSinglePage car={car} cars={cars.slice(startIndex, endIndex)} />
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
