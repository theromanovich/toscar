import Link from 'next/link'
import { Car } from '@prisma/client'

const CarCard = (car: Car) => {
  const {
    slug,
    main_image,
    id,
    make,
    model,
    engine,
    year,
    mileage,
    drive,
    gearbox,
    price,
    status
  } = car

  return (
    <Link href={`catalog/${slug}`} key={id}>
      <div className='catalog__item'>
        <div className='car-photo'>
          <img src={main_image} alt={make} />
        </div>
        <div className='car-info'>
          <div className='car-info__title'>
            {make} {model}
          </div>

          <div className='car-info__characteristics'>
            <div>
              <div className='engine'>
                Об'єм двигуна <span>{engine}</span>
              </div>
              <div className='year'>
                Рік <span>{year}</span>
              </div>
              <div className='mileage'>
                Пробіг <span>{mileage} км</span>
              </div>
            </div>
            <div>
              <div className='car-info__drive'>
                Привід <span>{drive}</span>
              </div>
              <div className='car-info__gearbox'>
                КПП <span>{gearbox}</span>
              </div>
            </div>
            <div className='car-info__price'>
              Вартість в Україні
              <div className='price'>{price}</div>
              <button className={`status-btn ${status ? 'green' : 'orange'}`}>
                {status ? 'В наявності' : 'Під заказ'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default CarCard
