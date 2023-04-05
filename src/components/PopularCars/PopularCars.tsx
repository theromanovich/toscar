import { carsData } from './carsData'
import { useState, useRef } from 'react'

interface Car {
  id: number
  make: string
  model: string
  img: string
  engine: string
  year: number
  mileage: number
  drive: string
  gearbox: string
  price: string
  status: boolean
}

const PopularCars = () => {
  const [cars, setCars] = useState<Car[]>(carsData.slice(0, 3))
  const loadBtn = useRef<HTMLButtonElement>(null)

  const loadCars = () => {
    setCars(carsData)
    loadBtn.current.style.display = 'none'
  }

  return (
    <div className='popular-cars'>
      <div className='popular-cars__container'>
        {cars.map(car => {
          return (
            <div className='popular-cars__item' key={car.id}>
              <div className='car-photo'>
                <img src={car.img} alt={car.make} />
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
          )
        })}
        <button ref={loadBtn} className='download-btn' onClick={loadCars}>
          Показати ще
        </button>
      </div>
    </div>
  )
}
export default PopularCars
