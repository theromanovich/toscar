import Link from 'next/link'
const Modal = () => {
  return (
    <div className='modal'>
      <div className='modal__overlay'>
        <div className='modal__content'>
          <div className='title'>Ваші контактні дані</div>
          <label htmlFor='username'>Ім'я</label>
          <input type='text' id='username' required />
          <label htmlFor='phone-num'>Номер телефону</label>
          <input type='text' id='phone-num' required />
          <div className='checkbox'>
            {' '}
            <input type='checkbox' id='check' required />
            <label htmlFor=''>
              я згоден з{' '}
              <Link href='/privacy-policy'>політикою конфіденційності</Link>
            </label>
          </div>
          <button>Оформити заявку</button>
        </div>
      </div>
    </div>
  )
}
export default Modal
