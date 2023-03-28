import { useRef } from 'react'

const MainPageFilter = ({ findCars = 0, onFilter }) => {
  const makeRef = useRef()
  const engineRef = useRef()
  const bodyRef = useRef()
  const yearFromRef = useRef()
  const yearToRef = useRef()

  const onSubmitForm = e => {
    e.preventDefault()

    const make =
      makeRef.current.value == 'undefined' ? undefined : makeRef.current.value
    const engine =
      engineRef.current.value == 'undefined'
        ? undefined
        : engineRef.current.value
    const body =
      bodyRef.current.value == 'undefined' ? undefined : bodyRef.current.value
    const yearFrom =
      yearFromRef.current.value == 'undefined'
        ? undefined
        : yearFromRef.current.value
    const yearTo =
      yearToRef.current.value == 'undefined'
        ? undefined
        : yearToRef.current.value

    onFilter(make, engine, body, yearFrom, yearTo)

    // makeRef.current.value = 'undefined'
    // engineRef.current.value = 'undefined'
    // bodyRef.current.value = 'undefined'
    // yearFromRef.current.value = 'undefined'
    // yearToRef.current.value = 'undefined'
  }

  return (
    <form onSubmit={onSubmitForm} className='main-page__filter'>
      <div className='filter__container'>
        <div className='filter__items'>
          <div className='make'>
            <label htmlFor='make'>Марка</label>
            <select
              ref={makeRef}
              name='make'
              className='default-select'
              id='make'
            >
              <option value='undefined'>Не вибрано</option>
              <option value='BMW'>BMW</option>
            </select>
          </div>
          <div className='engine'>
            <label htmlFor='engine'>Об'єм двигуна</label>
            <select
              ref={engineRef}
              name='engine'
              className='default-select'
              id='engine'
            >
              <option value='undefined'>Не вибрано</option>
              <option value='2.0'>2.0</option>
              <option value='3.0'>3.0</option>
              <option value='2.5'>2.5</option>
            </select>
          </div>
          <div className='body'>
            <label htmlFor='body'>Тип кузова</label>
            <select
              ref={bodyRef}
              name='body'
              className='default-select'
              id='body'
            >
              <option value='undefined'>Не вибрано</option>
              <option value='sedan'>Седан</option>
            </select>
          </div>
          <div className='year'>
            <label htmlFor='from'>Рік випуску</label>
            <div className='year-selects'>
              <select
                ref={yearFromRef}
                name='from'
                className='default-select'
                id='from'
              >
                <option value='undefined'>Від</option>
              </select>
              <select
                ref={yearToRef}
                name='to'
                className='default-select'
                id='to'
              >
                <option value='undefined'>До</option>
              </select>
            </div>
          </div>
        </div>
        <div className='filter__cta'>
          <div className='search-result'>
            Знайдено автомобілей: <span>{findCars}</span>
          </div>
          <button className='search-btn'>Пошук</button>
        </div>
      </div>
    </form>
  )
}
export default MainPageFilter
