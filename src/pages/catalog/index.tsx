import Head from 'next/head'
import { Car } from '@prisma/client'
import Catalog from '../../components/Catalog/Catalog'
import { PrismaClient } from '@prisma/client'

const catalogPage = ({ cars }: { cars: Car[] }) => {
  return (
    <>
      <Head>
        <title>Каталог</title>
      </Head>
      <Catalog cars={cars} />
    </>
  )
}
export default catalogPage

export async function getStaticProps() {
  const prisma = new PrismaClient()

  const cars = await prisma.car.findMany()
  return {
    props: { cars }
  }
}
