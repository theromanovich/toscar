import {
  RequestIcon,
  ContractIcon,
  SelectionIcon,
  ShippingIcon,
  DeliveryItem,
  LeaveRequestIcon
} from './HowToBuyIcons'
import Modal from './Modal'

const HowToBuy = () => {
  return (
    <div className='buy'>
      <div className='buy__container'>
        <div className='buy__director'>
          <img src='/images/director.png' alt='director' />
        </div>
        <div className='buy__info'>
          <div className='title'>Як відбувається купівля</div>
          <div className='buy__points'>
            <div className='buy__points-item'>
              <RequestIcon />

              <div className='title'>Залишаєте заявку</div>
              <div className='descr'>
                Ви залишаєте заявку на сайті, або зв'язуєтеся з нами зручним для
                Вас способом.
              </div>
            </div>
            <div className='buy__points-item'>
              <ContractIcon />
              <div className='title'>Укладаємо договір</div>
              <div className='descr'>
                Укладаємо договір, Ви вносите гарантійний депозит.
              </div>
            </div>
            <div className='buy__points-item'>
              <SelectionIcon />

              <div className='title'>Підбір та купівля авто</div>
              <div className='descr'>
                Вам пропонуються підходящі варіанти з аукціонів, Ви приймаєте
                рішення, автомобіль викуповується.
              </div>
            </div>
            <div className='buy__points-item'>
              <ShippingIcon />
              <div className='title'>Доставка та оформлення</div>
              <div className='descr'>
                Ми транспортуємо авто в порт, вантажимо на судно та доставляємо
                до України, де проходить митне оформлення.
              </div>
            </div>
            <div className='buy__points-item'>
              <DeliveryItem />
              <div className='title'>Доставка до вашого міста</div>
              <div className='descr'>
                Ми доставляємо авто в будь-який регіон України обраним Вами
                способом або Ви самі забираєте його у Києві.
              </div>
            </div>
            <div className='buy__points-item'>
              Залишити заявку
              <LeaveRequestIcon />
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  )
}
export default HowToBuy
