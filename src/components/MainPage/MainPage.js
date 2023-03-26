import MainPageFilter from '../MainPageFilter/MainPageFilter'
import PopularCars from '../PopularCars/PopularCars'
import Benefits from '../Benefits/Benefits'
import HowToBuy from '../HowToBuy/HowToBuy'

const MainPage = () => {
  return (
    <div className='main-page'>
      <div className='main-page__container'>
        <div className='main-page__bg'>
          <div className='main-page__title'>
            Доставимо будь-яку техніку з США за 3 тижні
          </div>
        </div>
      </div>
      <MainPageFilter />
      <PopularCars />
      <Benefits />
      <HowToBuy />
    </div>
  )
}
export default MainPage
