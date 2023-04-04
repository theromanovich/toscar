import { LocationIcon, EmailIcon, TelIcon } from './ToseiFooterIcons'

const ToseiFooter = () => {
  const footerYear = new Date().getFullYear()
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__about'>
          <div className='footer__title'>TOSCAR {footerYear}</div>
          <div className='footer__descr'>
            Продаж вантажної та спецтехніки, легкових автомобілів, водної
            техніки. Будь-яка техніка з США. Авто з аукціонів.
          </div>
          <div className='footer__address'>
            <LocationIcon />
            Вулиця Волоська 24/37, Київ
          </div>
        </div>
        <div className='footer__phone'>
          <a href='tel:+380675064506'>
            <TelIcon /> +38(067)506-45-06
          </a>
          <a href='tel:+380675525612'>
            <TelIcon /> +38(067)552-56-12
          </a>
        </div>
        <div className='footer__email'>
          <EmailIcon />
          <a href='mailto: >theromanovich03@gmail.com'>
            theromanovich03@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
export default ToseiFooter
