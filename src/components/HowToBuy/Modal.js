import Link from 'next/link'
import { useState, useEffect } from 'react'

const Modal = ({ modalStatus, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log(modalStatus)
  useEffect(() => {
    if (modalStatus) {
      setIsModalOpen(true)
    }
  }, [modalStatus])

  const closeModal = e => {
    e.stopPropagation()
    setIsModalOpen(false)
    onClose()
  }

  const handleContentClick = e => {
    e.stopPropagation()
  }
  return (
    <div className={isModalOpen ? 'modal active' : 'modal'}>
      <div onClick={closeModal} className='modal__overlay'>
        <form className='modal__content'>
          <div className='title'>Ваші контактні дані</div>
          <label htmlFor='username'>Ім'я</label>
          <input type='text' id='username' required placeholder="Ім'я" />
          <label htmlFor='phone-num'>Номер телефону</label>
          <input
            type='tel'
            id='phone-num'
            required
            pattern='[0]{1}[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
            placeholder='067-506-45-06'
          />
          <div className='checkbox'>
            {' '}
            <input type='checkbox' id='check' required />
            <label htmlFor=''>
              я згоден(на) з{' '}
              <Link href='/privacy-policy'>політикою конфіденційності</Link>
            </label>
          </div>
          <button>Оформити заявку</button>
          <div onClick={() => setIsModalOpen(false)} className='close-modal'>
            +
          </div>
        </form>
      </div>
    </div>
  )
}
export default Modal
