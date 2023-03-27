const MainPageFilter = () => {
  return (
    <div className='main-page__filter'>
      <div className='filter__container'>
        <div className='filter__items'>
          <div className='make'>
            <label htmlFor='make'>Марка</label>
            <select name='make' className='default-select' id='make'>
              <option value='no'>Не вибрано</option>
              <option value='BMW'>BMW</option>
            </select>
          </div>
          <div className='engine'>
            <label htmlFor='engine'>Об'єм двигуна</label>
            <select name='make' className='default-select' id='make'>
              <option value='no'>Не вибрано</option>
              <option value='2'>2.0</option>
            </select>
          </div>
          <div className='body'>
            <label htmlFor='body'>Тип кузова</label>
            <select
              name='body'
              className='default-select'
              id='body'
              placeholder='gg'
            >
              <option value='no'>Не вибрано</option>
              <option value='sedan'>Седан</option>
            </select>
          </div>
          <div className='year'>
            <label htmlFor='from'>Рік випуску</label>
            <div className='year-selects'>
              <select name='from' className='default-select' id='from'>
                <option value='no'>Від</option>
              </select>
              <select name='from' className='default-select' id='from'>
                <option value='no'>До</option>
              </select>
            </div>
          </div>
        </div>
        <div className='filter__cta'>
          <div className='search-result'>
            Знайдено автомобілей: <span>256</span>
          </div>
          <button className='search-btn'>Пошук</button>
        </div>
      </div>
    </div>
  )
}
export default MainPageFilter
