// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
          'https://upload.wikimedia.org/wikipedia/commons/2/21/BMW_X5_(E53%2C_Facelift)_–_Frontansicht%2C_12._Juni_2011%2C_Düsseldorf.jpg',
        price: '$10,000 ',
        images: [
          'https://cdn0.riastatic.com/photos/ir/new/auto/photo/bmw_x5__485051110-620x415x70.jpg',
          'https://s.drom.ru/1/reviews/photos/bmw/x5/big_66696_6.jpeg',
          'https://cars.ua/thumb/car/20171127/w933/h622/q80/kupit-bmw-x5-chernovcy-513008.jpg'
        ],
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
        images: [
          'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/598264/2015-honda-fit-ex-photo-598298-s-986x603.jpg',
          'https://photos.prnewswire.com/prnfull/20140113/LA45140-b',
          'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/598264/2015-honda-fit-ex-photo-598298-s-986x603.jpg?fill=2:1&resize=640:*'
        ],
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
        images: [
          'https://www.carscoops.com/wp-content/uploads/2020/08/2020-Toyota-Camry-Black-Edition-JDM-spec-0.jpg',
          'https://i.pinimg.com/originals/82/6e/66/826e665d1d5e3e4ae41f620a1f66faa0.jpg',
          'https://media.ed.edmunds-media.com/toyota/camry/2021/oem/2021_toyota_camry_sedan_xle_rq_oem_1_815.jpg'
        ],
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
        images: [
          'https://www.mustangspecs.com/wp-content/uploads/2022/01/Carbonized-Gray-2022-Ford-Mustang-7-scaled.jpeg',
          'https://cdn.carbuzz.com/gallery-images/2022-ford-mustang-convertible-dashboard-carbuzz-555048-1600.jpg',
          'https://preview.redd.it/dyluwxm2i4p81.jpg?auto=webp&s=6b84181e0ce214ce1d268229091f163ed5126b2b'
        ],
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
        images: [
          'https://1830262577.rsc.cdn77.org/files/2HGFC2F69LH506839/COPART/54020371/photo/1077e933-e0e6-4c8b-8acf-e24387ae0543.JPG',
          'https://cdn.carbuzz.com/gallery-images/2020-honda-civic-sedan-dashboard-carbuzz-849498-1600.jpg',
          'https://res.cloudinary.com/caradvice/image/private/q_auto/v1582686904/t0n6jpuyort5pv4uwfei.jpg'
        ],
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
        images: [
          'https://cdn.motor1.com/images/mgl/VopbK/s1/2020-corvette-stingray-in-black.jpg',
          'https://cars.usnews.com/static/images/Auto/izmo/i159614411/2021_chevrolet_corvette_stingray_dashboard.jpg',
          'https://cars.ua/thumb/upload/w933/h622/q80/608986577a17b6_66625841.jpg'
        ],
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
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/BMW_G20%2C_Paris_Motor_Show_2018%2C_IMG_0492.jpg/1200px-BMW_G20%2C_Paris_Motor_Show_2018%2C_IMG_0492.jpg',
          'https://all-test-drives.com/wp-content/uploads/posts/2018-10/1538664290_55_result.jpg',
          'https://cdn.motor1.com/images/mgl/pbb3Bo/s1/2022-bmw-3er-limousine.jpg'
        ],
        price: '$30,000',
        slug: 'bmw-3-2019'
      },
      {
        make: 'Audi',
        model: 'A4',
        engine: '2.0',
        year: 2020,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 10000,
        body: 'sedan',
        status: true,
        main_image:
          'https://cdn.motor1.com/images/mgl/brOzk/s1/2020-audi-a4.jpg',
        images: [
          'https://img.plc.ua/medium/img3/15/2020/24/2844/69dff559bb3210e3fd9c20233f0e32c9/6e21150341e738bec287d4375d1b6284.jpg',
          'https://www.autocentre.ua/wp-content/uploads/2019/05/2020-audi-a4.jpg',
          'https://i.infocar.ua/i/2/5872/115759/1920x.jpg'
        ],
        price: '$35,000',
        slug: 'audi-a4-2020'
      },
      {
        make: 'Mercedes-Benz',
        model: 'C-Class',
        engine: '2.0',
        year: 2021,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 5000,
        body: 'sedan',
        status: true,
        main_image:
          'https://www.ixbt.com/img/n1/news/2021/11/5/mercedes-c-klasse-limousine-2021_large.jpg',
        images: [
          'https://img.sm360.ca/images/article/mercedes-benz-ottawa/90430//mbcan-2021-c-sedan-hero-dr1627706395947.jpg',
          'https://motor.ru/imgs/2021/04/03/11/4594219/9c9233cb6e758f20c316c79cdcd54332ca70811b.jpg',
          'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210223072553_Mercedes_Benz_C_class_2021_rear.jpg'
        ],
        price: '$45,000',
        slug: 'mercedes-cclass-2021'
      },
      {
        make: 'Porsche',
        model: '911',
        engine: '3.0',
        year: 2021,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 3000,
        body: 'сoupe',
        status: false,
        main_image:
          'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/is8rDPGsGlcg/v1/-1x-1.jpg',
        price: '$90,000',
        slug: 'porsche-911-2021'
      },
      {
        make: 'Nissan',
        model: 'Altima',
        engine: '2.5',
        year: 2020,
        gearbox: 'Автомат',
        drive: 'Передній',
        mileage: 20000,
        body: 'sedan',
        status: true,
        main_image:
          'https://hips.hearstapps.com/hmg-prod/images/2019-nissan-altima-102-1538074559.jpg',
        price: '$20,000',
        slug: 'nissan-altima-2020'
      },
      {
        make: 'Tesla',
        model: 'Model 3',
        engine: 'Electric',
        year: 2018,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 40000,
        body: 'sedan',
        status: false,
        main_image:
          'https://bossauto-images.s3.eu-central-1.amazonaws.com/images/image_1604308116990.jpg',
        price: '$20,000',
        slug: 'tesla-model3-2018'
      },
      {
        make: 'Lexus',
        model: 'RX',
        engine: '3.5',
        year: 2021,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 5000,
        body: 'SUV',
        status: false,
        main_image:
          'https://img.automoto.ua/overview/lexus-rx-2021-4db-huge-1949.jpg',
        price: '$50,000',
        slug: 'lexus-rx-2021'
      },
      {
        make: 'Chevrolet',
        model: 'Camaro',
        engine: '3.6',
        year: 2013,
        gearbox: 'Механіка',
        drive: 'Задній',
        mileage: 70000,
        body: 'coupe',
        status: false,
        main_image: 'https://i.infocar.ua/i/2/3212/102461/1920x.jpg',
        price: '$15,000',
        slug: 'chevrolet-camaro-2013'
      },
      {
        make: 'Jaguar',
        model: 'F-Type',
        engine: '3.0',
        year: 2016,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 70000,
        body: 'coupe',
        status: false,
        main_image:
          'https://www.motortrend.com/uploads/sites/5/2016/02/2016-Jaguar-F-Type-AWD-R-Coupe-front-three-quarter-in-motion.jpg',
        price: '$45,000',
        slug: 'jaguar-ftype-2016'
      },
      {
        make: 'Ford',
        model: 'F-150',
        engine: '6.2',
        year: 2017,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 60000,
        body: 'truck',
        status: false,
        main_image:
          'https://cdn3.riastatic.com/photosnew/auto/photo/ford_f-150__431292938fx.jpg',
        price: '$30,000',
        slug: 'ford-f150-2017'
      },
      {
        make: 'Dodge',
        model: 'Charger',
        engine: '3.6',
        year: 2015,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 70000,
        body: 'sedan',
        status: false,
        main_image:
          'https://images.ctfassets.net/c9t6u0qhbv9e/2015DodgeChargerTestDriveReviewsummary/3fa52937041643b2b128210a610435a5/2015_Dodge_Charger_Test_Drive_Review_summaryImage.jpeg',
        price: '$20,000',
        slug: 'dodge-charger-2015'
      },
      {
        make: 'Ferrari',
        model: '458',
        engine: '4.5',
        year: 2012,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 20000,
        body: 'сoupe',
        status: false,
        main_image:
          'https://cdn3.riastatic.com/photosnew/auto/photo/ferrari_458-italia__331683108f.jpg',
        price: '$140,000',
        slug: 'ferrari-458-2012'
      },
      {
        make: 'Toyota',
        model: 'Supra',
        engine: '3.0',
        year: 2022,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 25000,
        body: 'сoupe',
        status: false,
        main_image:
          'https://media.ed.edmunds-media.com/toyota/gr-supra/2022/oem/2022_toyota_gr-supra_coupe_20_fq_oem_1_1600.jpg',
        price: '$40,000',
        slug: 'toyota-supra-2022'
      },
      {
        make: 'Volkswagen',
        model: 'Golf',
        engine: '2.0',
        year: 2018,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 40000,
        body: 'hatchback',
        status: true,
        main_image:
          'https://cdn.motor1.com/images/mgl/YKOkW/s1/2018-volkswagen-golf-r-review.jpg',
        price: '$22,000',
        slug: 'volkswagen-golf-2018'
      },
      {
        make: 'Cadillac',
        model: 'Escalade',
        engine: '6.2',
        year: 2018,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 45000,
        body: 'SUV',
        status: true,
        main_image: 'https://www.motortrend.com/uploads/f/171715639.jpg',
        price: '$50,000',
        slug: 'cadillac-escalade-2018'
      },
      {
        make: 'Nissan',
        model: 'GT-R',
        engine: '3.8',
        year: 2014,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 50000,
        body: 'coupe',
        status: true,
        main_image:
          'https://car-images.bauersecure.com/wp-images/13851/01nissangtrnismocarreview.jpg',
        price: '$70,000',
        slug: 'nissan-gtr-2014'
      },
      {
        make: 'Fiat',
        model: '500',
        engine: '1.4',
        year: 2013,
        gearbox: 'Автомат',
        drive: 'Передній',
        mileage: 60000,
        body: 'hatchback',
        status: true,
        main_image:
          'https://upload.wikimedia.org/wikipedia/commons/f/f4/2013_Fiat_500_Lounge_1.2.jpg',
        price: '$8,000',
        slug: 'fiat-500-2013'
      },
      {
        make: 'Hyundai',
        model: 'Accent',
        engine: '1.6',
        year: 2011,
        gearbox: 'Автомат',
        drive: 'Передній',
        mileage: 100000,
        body: 'sedan',
        status: true,
        main_image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2012_Hyundai_Accent_GLS_sedan_--_12-14-2011.jpg/1200px-2012_Hyundai_Accent_GLS_sedan_--_12-14-2011.jpg',
        price: '$6,000',
        slug: 'hyundai-accent-2011'
      },
      {
        make: 'Kia',
        model: 'Soul',
        engine: '2.0',
        year: 2014,
        gearbox: 'Автомат',
        drive: 'Передній',
        mileage: 70000,
        body: 'hatchback',
        status: true,
        main_image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d4/2014_Kia_Soul_Plus_US_front_left.jpg',
        price: '$10,000',
        slug: 'kia-soul-2014'
      },
      {
        make: 'Volvo',
        model: 'S60',
        engine: '2.5',
        year: 2016,
        gearbox: 'Автомат',
        drive: 'Передній',
        mileage: 30000,
        body: 'sedan',
        status: false,
        main_image:
          'https://media.ed.edmunds-media.com/volvo/s60/2016/oem/2016_volvo_s60_sedan_t5-cross-country-platinum_fq_oem_1_1600.jpg',
        price: '$10,000',
        slug: 'volvo-s60-2016'
      },
      {
        make: 'Hyundai',
        model: 'Elantra',
        engine: '1.8',
        year: 2014,
        gearbox: 'Автомат',
        drive: 'Передній',
        mileage: 70000,
        body: 'sedan',
        status: true,
        main_image:
          'https://bidfax.info/uploads/posts/2020-03/10/hyundai-elantra-se-2014-5npdh4ae1eh477168-img1.jpg',
        price: '$9,000',
        slug: 'hyundai-elantra-2014'
      },
      {
        make: 'Mazda',
        model: 'CX-5',
        engine: '2.5',
        year: 2013,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 90000,
        body: 'SUV',
        status: true,
        main_image: 'https://i.infocar.ua/i/12/4327/1400x936.jpg',
        price: '$12,000',
        slug: 'mazda-cx-5-2013'
      },
      {
        make: 'Mercedes-Benz',
        model: 'S-Class',
        engine: '4.6',
        year: 2014,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 80000,
        body: 'sedan',
        status: true,
        main_image: 'https://i.infocar.ua/i/12/4327/1400x936.jpg',
        price: '$28,000',
        slug: 'mercedes-benz-s-class-2014'
      },
      {
        make: 'Cadillac',
        model: 'CS',
        engine: '3.6',
        year: 2015,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 60000,
        body: 'sedan',
        status: true,
        main_image:
          'https://www.tampabay.com/resizer//tC2K8zlp61SSrKSLgE_fycNE7_0=/900x506/smart/arc-anglerfish-arc2-prod-tbt.s3.amazonaws.com/public/U5LSH2GG64I6TBKNIBWI6S7HAY.jpg',
        price: '$18,000',
        slug: 'cadillac-cts-2015'
      },
      {
        make: 'Chrysler',
        model: '300',
        engine: '3.6',
        year: 2014,
        gearbox: 'Автомат',
        drive: 'Задній',
        mileage: 120000,
        body: 'sedan',
        status: true,
        main_image:
          'https://images.hgmsites.net/hug/2014-chrysler-300_100446116_h.jpg',
        price: '$10,000',
        slug: 'chrysler-300-2014'
      },
      {
        make: 'BMW',
        model: '5',
        engine: '3.0',
        year: 2020,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 12000,
        body: 'sedan',
        status: true,
        main_image: 'https://i.infocar.ua/i/12/6224/1200x630.jpg',
        price: '$41,800',
        slug: 'bmw-5-2020'
      },
      {
        make: 'Lexus',
        model: 'ES',
        engine: '2.5',
        year: 2014,
        gearbox: 'Автомат',
        drive: 'Повний',
        mileage: 70000,
        body: 'sedan',
        status: true,
        main_image: 'https://i.ytimg.com/vi/lqPQdIWmIR4/maxresdefault.jpg',
        price: '$16,500',
        slug: 'lexus-es-2014'
      },
      {
        make: 'Toyota',
        model: 'Corolla',
        engine: '2.0',
        year: 2015,
        gearbox: 'Автомат',
        drive: 'Передній',
        mileage: 100000,
        body: 'sedan',
        status: true,
        main_image:
          'https://upload.wikimedia.org/wikipedia/commons/4/4f/2015_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282015-11-11%29_01.jpg',
        price: '$9000',
        slug: 'toyota-corolla-2015'
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
  const AudiA42O2OId = cars.find(car => car.slug === 'audi-a4-2020')?.id || 1
  const MercedesCClass2021Id =
    cars.find(car => car.slug === 'mercedes-cclass-2021')?.id || 1
  const Porsche9112021Id =
    cars.find(car => car.slug === 'porsche-911-2021')?.id || 1
  const TeslaModel32018Id =
    cars.find(car => car.slug === 'tesla-model3-2018')?.id || 1
  const LexusRX2021Id = cars.find(car => car.slug === 'lexus-rx-2021')?.id || 1
  const ChevroletCamaro2013Id =
    cars.find(car => car.slug === 'chevrolet-camaro-2013')?.id || 1
  const JaguarFType2016Id =
    cars.find(car => car.slug === 'jaguar-ftype-2016')?.id || 1
  const FordF1502017Id =
    cars.find(car => car.slug === 'ford-f150-2017')?.id || 1
  const DodgeCharger2015Id =
    cars.find(car => car.slug === 'dodge-charger-2015')?.id || 1
  const Ferrari4582012Id =
    cars.find(car => car.slug === 'ferrari-458-2012')?.id || 1
  const ToyotaSupra2022Id =
    cars.find(car => car.slug === 'toyota-supra-2022')?.id || 1
  const VolkswagenGolf2018Id =
    cars.find(car => car.slug === 'volkswagen-golf-2018')?.id || 1
  const CadillacEscalade2018Id =
    cars.find(car => car.slug === 'cadillac-escalade-2018')?.id || 1
  const NissanGTR2014Id =
    cars.find(car => car.slug === 'nissan-gtr-2014')?.id || 1
  const Fiat5002013Id = cars.find(car => car.slug === 'fiat-500-2013')?.id || 1
  const HyundaiAccent2011Id =
    cars.find(car => car.slug === 'hyundai-accent-2011')?.id || 1
  const KiaSoul2014Id = cars.find(car => car.slug === 'kia-soul-2014')?.id || 1
  const VolvoS602016Id =
    cars.find(car => car.slug === 'volvo-s60-2016')?.id || 1
  const HyundaiElantra2014Id =
    cars.find(car => car.slug === 'hyundai-elantra-2014')?.id || 1
  const MazdaCX52013Id =
    cars.find(car => car.slug === 'mazda-cx-5-2013')?.id || 1
  const MercedesBenzSClass2014Id =
    cars.find(car => car.slug === 'mercedes-benz-s-class-2014')?.id || 1
  const CadillacCTS2015Id =
    cars.find(car => car.slug === 'cadillac-cts-2015')?.id || 1
  const Chrysler3002014Id =
    cars.find(car => car.slug === 'chrysler-300-2014')?.id || 1
  const BMW52020Id = cars.find(car => car.slug === 'bmw-5-2020')?.id || 1
  res.status(200).json({ name: 'hello' })
}
