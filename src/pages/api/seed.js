// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PRICE, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  await prisma.car.deleteMany()

  await prisma.car.createMany({
    data: [
      {
        make: 'BMW',
        model: 'X5',
        engine: '3.0',
        year: 2005,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 120000,
        body: 'SUV',
        status: true,
        main_image:
          'https://upload.wikimedia.org/wikipedia/commons/2/21/BMW_X5_%28E53%2C_Facelift%29_%E2%80%93_Frontansicht%2C_12._Juni_2011%2C_D%C3%BCsseldorf.jpg',
        price: '$10,000 ',
        slug: 'bmw-x5-2005'
      },
      {
        make: 'Honda',
        model: 'Fit',
        engine: '2.0',
        year: 2015,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 40020,
        body: 'hatchback',
        status: true,
        main_image:
          'https://media.ed.edmunds-media.com/honda/fit/2015/oem/2015_honda_fit_4dr-hatchback_ex-l_fq_oem_1_1600.jpg',
        price: '$14,000',
        slug: 'honda-fit-2015'
      },
      {
        make: 'Toyota',
        model: 'Camry',
        engine: '2.5',
        year: 2021,
        gearbox: 'Автомат',
        drive: 'Передній',
        mileage: 10020,
        body: 'sedan',
        status: true,
        main_image:
          'https://cdn3.riastatic.com/photosnew/auto/photo/toyota_camry__486174418f.jpg',
        price: '$25,000',
        slug: 'toyota-camry-2021'
      },
      {
        make: 'Ford',
        model: 'Mustang',
        engine: '5.0',
        year: 2022,
        gearbox: 'Механіка',
        drive: 'Задній',
        mileage: 1000,
        body: 'сoupe',
        status: false,
        main_image:
          'https://motormart.ua/media/transport/gallery/images/test_image_AOAOY14.jpg',
        price: '$40,000',
        slug: 'ford-mustang-2022'
      },
      {
        make: 'Honda',
        model: 'Civic',
        engine: '1.5',
        year: 2020,
        gearbox: 'Автомат',
        drive: 'Передній',
        mileage: 15000,
        body: 'sedan',
        status: true,
        main_image:
          'https://cdn.jdpower.com/JDPA_2020-Honda-Civic-Sport-Touring-Hatchback-White-Front-Quarter.jpg',
        price: '$20,000',
        slug: 'honda-civic-2020'
      },
      {
        make: 'Chevrolet',
        model: 'Corvette',
        engine: '6.2',
        year: 2021,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 2000,
        body: 'coupe',
        status: false,
        main_image:
          'https://www.autocentre.ua/wp-content/uploads/2020/05/2020-chevrolet-corvette-first-drive-1.jpg',
        price: '$65,000',
        slug: 'chevrolet-corvette-2021'
      },
      {
        make: 'BMW',
        model: '3',
        engine: '2.0',
        year: 2019,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 25000,
        body: 'sedan',
        status: true,
        main_image:
          'https://s.auto.drom.ru/i24271/c/photos/fullsize/bmw/3-series/bmw_3-series_1084231.jpg',
        price: '$30,000',
        slug: 'bmw-3-2019'
      }
    ]
  })

  const cars = await prisma.car.findMany()

  const BMWX52005Id = cars.find(car => car.slug === 'bmw-x5-2005')?.id || 1
  const HondaFit2015Id =
    cars.find(car => car.slug === 'honda-fit-2015')?.id || 1
  const ToyotaCamry2021Id =
    cars.find(car => car.slug === 'toyota-camry-2021')?.id || 1
  const FordMustang2022Id =
    cars.find(car => car.slug === 'ford-mustang-2022')?.id || 1
  const HondaCivic2020Id =
    cars.find(car => car.slug === 'honda-civic-2020')?.id || 1
  const ChevroletCorvette2021Id =
    cars.find(car => car.slug === 'chevrolet-corvette-2021')?.id || 1
  const BMW32019Id = cars.find(car => car.slug === 'bmw-3-2019')?.id || 1
  //   const pukkaId = cars.find(car => car.slug === 'Pukka')?.id || 1
  //   const kamasutraIndianId =
  //     cars.find(car => car.slug === 'Kamasutra Indian')?.id || 1
  //   const eldoradoTacoId = cars.find(car => car.slug === 'Eldorado Taco')?.id || 1
  //   const laBartolaId = cars.find(car => car.slug === 'La Bartola')?.id || 1
  //   const elCatrinId = cars.find(car => car.slug === 'El Catrin')?.id || 1
  //   const mariachisId = cars.find(car => car.slug === '3 Mariachis')?.id || 1
  //   const canoRestaurantId =
  //     cars.find(car => car.slug === 'Cano Restaurant')?.id || 1
  //   const bluRistoranteId =
  //     cars.find(car => car.slug === 'Blu Ristorante')?.id || 1
  //   const stelvioId = cars.find(car => car.slug === 'Stelvio')?.id || 1
  //   const sofiaId = cars.find(car => car.slug === 'Sofia')?.id || 1

  res.status(200).json({ name: 'hello' })
}
