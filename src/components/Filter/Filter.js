import FilterFound from "./FilterFound"

const Filter = () => {
  return (
    <div className="filter">
        <div className="filter__container">

            <div className="filter__search">
                <label htmlFor="search">Пошук</label>
                <div className="search-input">
                    <input type="text" className="input" id="search" name="search" placeholder="Знайти виконавця"/>
                </div>
            </div>
                                
            <div className="filter__items">
                <div className="model">
                    <label htmlFor="model" className="label">Марка авто</label>
                    <input type="text" className="input" id="model" placeholder="Авто"/>
                </div>
                <div className="year">
                    <label htmlFor="year" className="label">Рік авто</label>
                        <select id="year" name="year" className="default-select">
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                        </select>
                </div>

                <div className="condition">
                    <label htmlFor="condition" className="label">Стан авто</label>
                    <select id="condition" name="condition" className="default-select">
                        <option value="З пробігом">З пробігом</option>
                        <option value="Новий">Новий</option>
                    </select>  
                </div>

                <div className="budget">
                    <label className="label">Бюджет</label>
                    <div className="budget-inputs">
                        <input type="text" className="min-limit default-select" placeholder="Від 1000$"/>
                        <input type="text" className="max-limit default-select" placeholder="До 100000$"/>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <div className="region">
                    <label for="region" className="label">Локація</label>  
                    <input type="text" className="input" id="region" placeholder="Регіон"/>
                </div>

            </div>

            <div className="filter__cta">
                <div className="filter__extend-btn">
                    <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 2.25H1.5L7.5 9.345V14.25L10.5 15.75V9.345L16.5 2.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Всі фільтри
                    </button>
                </div>
                <div className="filter__show-btn">
                    <button>Показати усі пропозиції</button>
                </div>
            </div>

        </div>
        <FilterFound/>
    </div>
  )
}
export default Filter



