import Link from 'next/link'
import { Car } from '@prisma/client'

const CarsList = ({ cars }: { cars: Car[] }) => {
  return (
    <>
      {cars.map(car => {
        return (
          <Link href={`/catalog/${car.slug}`} key={car.id}>
            <div className='catalog__item'>
              <div className='car-photo'>
                <img src={car.main_image} alt={car.make} />
              </div>
              <div className='car-info'>
                <div className='car-info__title'>
                  {car.make} {car.model}
                </div>

                <div className='car-info__characteristics'>
                  <div>
                    <div className='engine'>
                      Об'єм двигуна <span>{car.engine}</span>
                    </div>
                    <div className='year'>
                      Рік <span>{car.year}</span>
                    </div>
                    <div className='mileage'>
                      Пробіг <span>{car.mileage} км</span>
                    </div>
                  </div>
                  <div>
                    <div className='car-info__drive'>
                      Привід <span>{car.drive}</span>
                    </div>
                    <div className='car-info__gearbox'>
                      КПП <span>{car.gearbox}</span>
                    </div>
                  </div>
                  <div className='car-info__price'>
                    Вартість в Україні
                    <div className='price'>{car.price}</div>
                    <button
                      className={`status-btn ${
                        car.status ? 'green' : 'orange'
                      }`}
                    >
                      {car.status ? 'В наявності' : 'Під заказ'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}
export default CarsList
