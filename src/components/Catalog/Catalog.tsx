import Link from 'next/link'
import { FormEvent, HTMLInputTypeAttribute, useRef } from 'react'
import { ArrowIcon } from './ArrowIcon'
import paginate from '../../utils/utils'
import { useEffect, useState } from 'react'
import MainPageFilter from '../MainPageFilter/MainPageFilter'

interface Car {
  id: number
  slug: string
  main_image: string
  make: string
  model: string
  engine: string | number
  year: number | string
  body: string
  mileage: number
  drive: string
  gearbox: string
  price: number
  status: boolean
}

function Catalog({ cars }: { cars: Car[] }) {
  const [carsState, setCarsState] = useState<Car[][]>(paginate(cars))
  const [paginateCars, setPaginateCars] = useState<Car[]>([])
  const [page, setPage] = useState<number>(0)
  const radioAny = useRef<HTMLInputElement>(null)
  const radioAvailable = useRef<HTMLInputElement>()
  const radioAwait = useRef<HTMLInputElement>()
  const [radioState, setRadioState] = useState<string>('')

  const prevBtn = () => {
    setPage(oldPage => {
      let prevPage: number = oldPage - 1
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

  const [makeState, setMake] = useState<string>()
  const [engineState, setEngine] = useState<string | number>()
  const [bodyState, setBody] = useState<string>()
  const [yearFromState, setYearFrom] = useState<string | number>()
  const [yearToState, setYearTo] = useState<string | number>()

  const filterHandler = (
    make: string,
    engine: string,
    body: string,
    yearFrom: string | number,
    yearTo: string | number
  ) => {
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

  function filterCars(
    make: string,
    engine: string | number,
    body: string,
    yearFrom: string | number,
    yearTo: string | number,
    status: boolean | undefined
  ) {
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

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  let notFound: string = ''
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
              onChange={handleRadioChange}
            />
            <label htmlFor='await'>Під заказ</label>
          </div>
        </form>

        <span className='notFound'>{notFound}</span>
        {paginateCars
          ? paginateCars.map(car => {
              const {
                slug,
                id,
                make,
                main_image,
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
                <Link href={`catalog/${slug}`}>
                  <div className='catalog__item' key={id}>
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
                          <button
                            className={`status-btn ${
                              status ? 'green' : 'orange'
                            }`}
                          >
                            {status ? 'В наявності' : 'Під заказ'}
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
