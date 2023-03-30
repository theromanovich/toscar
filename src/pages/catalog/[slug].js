import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/router'
import CarSinglePage from '@/components/Catalog/CarSinglePage'
import Catalog from '@/components/Catalog/Catalog'
import CarsList from '@/components/Catalog/CarsList'

const prisma = new PrismaClient()

export default function CarPage({ car, cars }) {
  console.log(cars)
  return (
    <>
      <div className='car-page'>
        <CarSinglePage car={car} cars={cars} />
      </div>
      <CarsList cars={cars.slice(19, 22)} />
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
