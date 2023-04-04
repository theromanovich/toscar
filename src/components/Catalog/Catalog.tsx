import { carsData } from '../PopularCars/carsData'
import Link from 'next/link'
import MainPageFilter from '../MainPageFilter/MainPageFilter'
import PopularCars from '../PopularCars/PopularCars'
import paginate from '../../utils/utils'

import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { ArrowIcon } from './ArrowIcon'
import { PrismaClient } from '@prisma/client'
// import CarsList from './CarsList'

function Catalog({ cars }) {
  const [carsState, setCarsState] = useState(paginate(cars))
  const [paginateCars, setPaginateCars] = useState([])
  const [page, setPage] = useState(0)
  const radioAny = useRef<HTMLInputElement>(null)
  const radioAvailable = useRef()
  const radioAwait = useRef()
  const [radioState, setRadioState] = useState('')

  const prevBtn = () => {
    setPage(oldPage => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = carsState.length - 1
      }
      return prevPage
    })
  }

  const nextBtn = () => {
    setPage(oldPage => {
      let nextPage = oldPage + 1
      if (nextPage > carsState.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  useEffect(() => {
    setPaginateCars(carsState[page])
  }, [page, carsState])

  useEffect(() => {
    if (carsState.length >= 1) {
      ;(document.querySelector('.pag-btn') as HTMLButtonElement).click()
      console.log('click')
    }
  }, [carsState])

  useEffect(() => {
    radioAny?.current?.click()
  }, [])

  const handlePageClick = (index: number) => {
    setPage(index)
  }

  const [makeState, setMake] = useState()
  const [engineState, setEngine] = useState()
  const [bodyState, setBody] = useState()
  const [yearFromState, setYearFrom] = useState()
  const [yearToState, setYearTo] = useState()

  const filterHandler = (make, engine, body, yearFrom, yearTo) => {
    setMake(make)
    setEngine(engine)
    setBody(body)
    setYearFrom(yearFrom)
    setYearTo(yearTo)
    if (radioState === 'available') {
      filterCars(make, engine, body, yearFrom, yearTo, true)
    } else if (radioState === 'await') {
      filterCars(make, engine, body, yearFrom, yearTo, false)
    } else {
      filterCars(make, engine, body, yearFrom, yearTo, undefined)
    }
  }

  function filterCars(make, engine, body, yearFrom, yearTo, status) {
    return setCarsState(
      paginate(
        cars.filter(car => {
          if (make != undefined && car.make !== make) {
            return false
          }
          if (engine != undefined && car.engine !== engine) {
            return false
          }
          if (body != undefined && car.body !== body) {
            return false
          }
          if (yearFrom != undefined && car.year < yearFrom) {
            return false
          }
          if (yearTo != undefined && car.year > yearTo) {
            return false
          }
          if (status !== undefined && car.status !== status) {
            return false
          }

          return true
        })
      )
    )
  }

  const handleRadioChange = event => {
    const value = event.target.value
    setRadioState(value)

    let status = undefined
    if (value === 'available') {
      status = true
    } else if (value === 'await') {
      status = false
    }

    filterCars(
      makeState,
      engineState,
      bodyState,
      yearFromState,
      yearToState,
      status
    )
  }

  let notFound = ''
  if (carsState.length === 0) {
    notFound = 'No cars found with specified parameters'
  }

  return (
    <div className='catalog'>
      <div className='catalog__filter'>
        <div className='breadcrumbs'>
          <Link href='/'>Головна</Link> / <Link href='/catalog'>Каталог</Link>
        </div>
        <div className='catalog__title'>Каталог авто</div>
        <MainPageFilter
          onFilter={filterHandler}
          findCars={carsState.reduce((acc, curr) => acc + curr.length, 0)}
        />
      </div>

      <div className='catalog__container'>
        <form className='car__filter'>
          <div>
            <input
              ref={radioAny}
              type='radio'
              value='any'
              name='status'
              id='any'
              //   onChange={() => setRadioState('any')}
              onChange={handleRadioChange}
            />
            <label htmlFor='any'>Будь-які</label>
          </div>
          <div>
            <input
              ref={radioAvailable}
              type='radio'
              name='status'
              value='available'
              id='available'
              //   onChange={() => setRadioState('available')}
              onChange={handleRadioChange}
            />
            <label htmlFor='available'>В наявності</label>
          </div>
          <div>
            <input
              ref={radioAwait}
              type='radio'
              name='status'
              value='await'
              id='await'
              //   onChange={() => setRadioState('await')}
              onChange={handleRadioChange}
            />
            <label htmlFor='await'>Під заказ</label>
          </div>
        </form>

        <span className='notFound'>{notFound}</span>
        {paginateCars
          ? paginateCars.map(car => {
              return (
                <Link href={`catalog/${car.slug}`}>
                  <div className='catalog__item' key={car.id}>
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
            })
          : ''}
        <div className='paginate-btns' style={{ userSelect: 'none' }}>
          <div className='prev' onClick={prevBtn}>
            {carsState.length > 0 && <ArrowIcon />}
          </div>
          <div className='pages'>
            {carsState.map((car, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={`${page == index && 'active'} pag-btn`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className='next' onClick={nextBtn}>
            {carsState.length > 0 && <ArrowIcon />}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Catalog
