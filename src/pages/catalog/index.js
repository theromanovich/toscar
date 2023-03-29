import Catalog from '@/components/Catalog/Catalog'
import { PrismaClient } from '@prisma/client'

const catalogPage = ({ cars }) => {
  return <Catalog cars={cars} />
}
export default catalogPage

export async function getStaticProps() {
  const prisma = new PrismaClient()

  const cars = await prisma.car.findMany()
  console.log(cars)
  return {
    props: { cars }
  }
}
