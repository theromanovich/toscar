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
  }

  const resetFilter = () => {
    onFilter(
      (makeRef.current.value = undefined),
      (bodyRef.current.value = undefined),
      (engineRef.current.value = undefined),
      (yearFromRef.current.value = undefined),
      (yearToRef.current.value = undefined)
    )
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
              <option value='Audi'>Audi</option>
              <option value='BMW'>BMW</option>
              <option value='Cadillac'>Cadillac</option>
              <option value='Chevrolet'>Chevrolet</option>
              <option value='Chrysler'>Chrysler</option>
              <option value='Dodge'>Dodge</option>
              <option value='Ferrari'>Ferrari</option>
              <option value='Fiat'>Fiat</option>
              <option value='Ford'>Ford</option>
              <option value='Hyundai'>Hyundai</option>
              <option value='Honda'>Honda</option>
              <option value='Jaguar'>Jaguar</option>
              <option value='Kia'>Kia</option>
              <option value='Lexus'>Lexus</option>
              <option value='Mazda'>Mazda</option>
              <option value='Mercedes-Benz'>Mercedes-Benz</option>
              <option value='Nissan'>Nissan</option>
              <option value='Porsche'>Porsche</option>
              <option value='Tesla'>Tesla</option>
              <option value='Toyota'>Toyota</option>
              <option value='Volkswagen'>Volkswagen</option>
              <option value='Volvo'>Volvo</option>
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
              <option value='1.4'>1.4</option>
              <option value='1.5'>1.5</option>
              <option value='1.6'>1.6</option>
              <option value='1.8'>1.8</option>
              <option value='2.0'>2.0</option>
              <option value='2.5'>2.5</option>
              <option value='3.0'>3.0</option>
              <option value='3.5'>3.5</option>
              <option value='3.6'>3.6</option>
              <option value='3.8'>3.8</option>
              <option value='4.5'>4.5</option>
              <option value='4.6'>4.6</option>
              <option value='5.0'>5.0</option>
              <option value='6.2'>6.2</option>
              <option value='Electric'>Електродвигун</option>
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
              <option value='SUV'>SUV</option>
              <option value='hatchback'>Хетчбек</option>
              <option value='сoupe'>Купе</option>
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
                <option value='2003'>2003</option>
                <option value='2004'>2004</option>
                <option value='2005'>2005</option>
                <option value='2006'>2006</option>
                <option value='2007'>2007</option>
                <option value='2008'>2008</option>
                <option value='2009'>2009</option>
                <option value='2010'>2010</option>
                <option value='2011'>2011</option>
                <option value='2012'>2012</option>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
              </select>
              <select
                ref={yearToRef}
                name='to'
                className='default-select'
                id='to'
              >
                <option value='undefined'>До</option>
                <option value='2004'>2004</option>
                <option value='2005'>2005</option>
                <option value='2006'>2006</option>
                <option value='2007'>2007</option>
                <option value='2008'>2008</option>
                <option value='2009'>2009</option>
                <option value='2010'>2010</option>
                <option value='2011'>2011</option>
                <option value='2012'>2012</option>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
              </select>
            </div>
          </div>
        </div>
        <div className='filter__cta'>
          <div className='search-result'>
            Знайдено автомобілей: <span>{findCars}</span>
          </div>
          <div className='btns'>
            <button onClick={resetFilter}>Скинути</button>
            <button className='search-btn'>Пошук</button>
          </div>
        </div>
      </div>
    </form>
  )
}
export default MainPageFilter
