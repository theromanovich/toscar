import Link from 'next/link'
// import CarsList from './YouMayAlsoLikeCars'
import Modal from '../HowToBuy/Modal'
import { Car } from '@prisma/client'
import { useState, useEffect } from 'react'
import YouMayAlsoLikeCars from './YouMayAlsoLikeCars'

interface CarSinglePageProps {
  car: Car
  cars: Car[]
}

const CarSinglePage = ({ car, cars }: CarSinglePageProps) => {
  const {
    make,
    model,
    engine,
    price,
    body,
    gearbox,
    year,
    drive,
    main_image,
    status,
    mileage,
    images,
    slug
  } = car
  const [galleryImg, setGalleryImg] = useState(0)

  const translateBodyFunc = () => {
    if (body.toLowerCase() == 'sedan') return 'Седан'
    if (body.toLowerCase() == 'suv') return 'SUV'
    if (body.toLowerCase() == 'coupe') return 'Купе'
    if (body.toLowerCase() == 'hatchback') return 'Хетчбек'
    if (body.toLowerCase() == 'truck') return 'Пікап'
  }
  const bodyTranslate: string = translateBodyFunc()

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  useEffect(() => {
    setModalOpen(false)
  })
  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const engineNaming = () => {
    if (engine.toLowerCase() == 'electric') return 'Електричний'
    return engine + ' ' + 'л'
  }

  const engineRenamed: string = engineNaming()

  const showImg = () => {
    switch (galleryImg) {
      case 0:
        return <img src={main_image} alt={make} />
      case 1:
        return <img src={images[0]} alt={make} />
      case 2:
        return <img src={images[1]} alt={make} />
      case 3:
        return <img src={images[2]} alt={make} />
      default:
        break
    }
  }

  return (
    <div className='car-page__container'>
      <div className='breadcrubms'>
        <Link href='/'>Головна</Link> / <Link href='/catalog'>Каталог</Link> /{' '}
        <Link href={`/catalog/${slug}`}>
          {make} {model} {year}
        </Link>
      </div>
      <div className='car-page__title'>
        {make} {model} {year}
        <button className={`status-btn ${status ? 'green' : 'orange'}`}>
          {status ? 'В наявності' : 'Під заказ'}
        </button>
      </div>

      <div className='car-page__info'>
        <div className='car-page__img'>{showImg()}</div>
        <div className='car-page__buy'>
          <div className='ukrprice'>
            {' '}
            Вартість в Україні
            <span className='price'>{price}</span>
          </div>
          <div className='characteristics'>
            <div>
              Об'єм двигуна: <span>{engineRenamed}</span>
            </div>
            <div>
              Коробка передач: <span>{gearbox}</span>
            </div>
            <div>
              Привід: <span>{drive}</span>
            </div>
            <div>
              Тип кузова: <span>{bodyTranslate}</span>
            </div>
            <div>
              Пробіг: <span>{mileage.toLocaleString('ru-RU')} км</span>
            </div>
          </div>
          <div className='car-page__btns'>
            <button onClick={() => setModalOpen(true)} className='request-btn'>
              Залишити заявку
            </button>
            <a href='tel:0675064506' className='consult-btn'>
              Консультація безкоштовно
            </a>
          </div>
        </div>
      </div>

      <div className='gallery' onMouseLeave={() => setGalleryImg(0)}>
        {images.map((img, index) => {
          return (
            <img
              className='gallery__img'
              src={img}
              alt='img'
              key={index}
              onMouseEnter={() => setGalleryImg(index + 1)}
            />
          )
        })}
      </div>

      <div className='youmaylike'>
        <p>Можливо вас зацікавить: </p>
        <YouMayAlsoLikeCars cars={cars} />
      </div>
      <Modal modalStatus={modalOpen} onClose={handleCloseModal} />
    </div>
  )
}
export default CarSinglePage
