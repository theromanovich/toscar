import Link from 'next/link'
import MapBg from './MapBg'
import { EmailIcon, TelephoneIcon } from '../ToseiFooter/ToseiFooterIcons'

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts__container'>
        <div className='breadcrumbs'>
          <Link href='/'>Головна</Link> / <Link href='/contacts'>Контакти</Link>
        </div>
        <div className='contacts__title'>Контакти</div>
        <div className='contacts__address'>Вулиця Верхній Вал 54, Київ</div>
        <div className='contacts__phone'>
          <a href='tel:+380675064506'>
            <TelephoneIcon /> +38(067)506-45-06
          </a>
          <a href='tel:+380675525612'>
            <TelephoneIcon /> +38(067)552-56-12
          </a>
        </div>
        <div className='contacts__email'>
          <EmailIcon />
          <a href='mailto: >theromanovich03@gmail.com'>
            theromanovich03@gmail.com
          </a>
        </div>
      </div>
      <MapBg />
    </div>
  )
}
export default Contacts
