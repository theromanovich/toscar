import { carsData } from '../PopularCars/carsData'
import Link from 'next/link'
import MainPageFilter from '../MainPageFilter/MainPageFilter'
import PopularCars from '../PopularCars/PopularCars'
import paginate from '@/utils/utils'
import { useEffect, useState } from 'react'

const Catalog = () => {
  //   const [carsState, setCarsState] = useState(paginate(carsData))
  const [paginateCars, setPaginateCars] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    setPaginateCars(paginate(carsData)[page])
  }, [page])

  const handlePageClick = index => {
    setPage(index)
  }

  const prevBtn = () => {
    setPage(oldPage => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = paginate(carsData).length - 1
      }
      return prevPage
    })
  }

  const nextBtn = () => {
    setPage(oldPage => {
      let nextPage = oldPage + 1
      if (nextPage > paginate(carsData).length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  return (
    <div className='catalog'>
      <div className='catalog__filter'>
        <div className='breadcrumbs'>
          <Link href='/'>Головна</Link> / <Link href='/catalog'>Каталог</Link>
        </div>
        <div className='catalog__title'>Каталог авто</div>
        <MainPageFilter />
      </div>

      <div className='catalog__container'>
        <form className='car__filter'>
          <div>
            <input type='radio' value='any' name='status' id='any' />
            <label htmlFor='any'>Будь-які</label>
          </div>
          <div>
            <input
              type='radio'
              name='status'
              value='available'
              id='available'
            />
            <label htmlFor='available'>В наявності</label>
          </div>
          <div>
            <input type='radio' name='status' value='await' id='await' />
            <label htmlFor='await'>Під заказ</label>
          </div>
        </form>

        {paginateCars.map(car => {
          return (
            <div className='catalog__item' key={car.id}>
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
        <div className='paginate-btns'>
          <div className='prev' onClick={prevBtn}>
            <ArrowIcon />
          </div>
          <div className='pages'>
            {paginate(carsData).map((car, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={page == index && 'active'}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className='next' onClick={nextBtn}>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Catalog

export const ArrowIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.4801 19.7301C11.283 19.7304 11.0933 19.6553 10.9501 19.5201L3.95005 12.5201C3.6576 12.2272 3.6576 11.7529 3.95005 11.4601L10.9501 4.46006C11.2429 4.16761 11.7172 4.16761 12.0101 4.46006C12.153 4.59935 12.2336 4.79048 12.2336 4.99006C12.2336 5.18965 12.153 5.38077 12.0101 5.52006L5.55005 12.0001L12.0001 18.4501C12.143 18.5894 12.2236 18.7805 12.2236 18.9801C12.2236 19.1797 12.143 19.3708 12.0001 19.5101C11.8646 19.6521 11.6763 19.7318 11.4801 19.7301Z'
        fill='#ABABAB'
      />
      <path
        d='M19.52 12.75H4.52002C4.10581 12.75 3.77002 12.4142 3.77002 12C3.77002 11.5858 4.10581 11.25 4.52002 11.25H19.52C19.9342 11.25 20.27 11.5858 20.27 12C20.27 12.4142 19.9342 12.75 19.52 12.75Z'
        fill='#ABABAB'
      />
      <path
        d='M11.4801 19.7301C11.283 19.7304 11.0933 19.6553 10.9501 19.5201L3.95005 12.5201C3.6576 12.2272 3.6576 11.7529 3.95005 11.4601L10.9501 4.46006C11.2429 4.16761 11.7172 4.16761 12.0101 4.46006C12.153 4.59935 12.2336 4.79048 12.2336 4.99006C12.2336 5.18965 12.153 5.38077 12.0101 5.52006L5.55005 12.0001L12.0001 18.4501C12.143 18.5894 12.2236 18.7805 12.2236 18.9801C12.2236 19.1797 12.143 19.3708 12.0001 19.5101C11.8646 19.6521 11.6763 19.7318 11.4801 19.7301Z'
        fill='#ABABAB'
      />
      <path
        d='M19.52 12.75H4.52002C4.10581 12.75 3.77002 12.4142 3.77002 12C3.77002 11.5858 4.10581 11.25 4.52002 11.25H19.52C19.9342 11.25 20.27 11.5858 20.27 12C20.27 12.4142 19.9342 12.75 19.52 12.75Z'
        fill='#ABABAB'
      />
    </svg>
  )
}
