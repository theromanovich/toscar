import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const Modal = ({ modalStatus, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitModal, setSubmitModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>()
  const nameModalInput = useRef<HTMLInputElement>()
  const phoneModalInput = useRef<HTMLInputElement>()
  const checkbox = useRef<HTMLInputElement>()

  const setDynamicBtn = () => {
    if (submitModal) {
      return (
        <button disabled style={{ background: 'green' }}>
          Оформлено
        </button>
      )
    } else {
      return <button>Оформити заявку</button>
    }
  }
  let dynamicModalBtn = setDynamicBtn()
  useEffect(() => {
    if (modalStatus) {
      setIsModalOpen(true)
      dynamicModalBtn = <button onClick={stopBubbling}>Оформити заявку</button>
    }
    if (modalRef.current.classList.contains('active')) {
      document.body.style.overflow = 'hidden'
    }
  }, [modalStatus, modalRef])

  const closeModal = () => {
    // e.preventDefault()
    setIsModalOpen(false)
    onClose()
    document.body.style.overflow = 'auto'
  }

  const stopBubbling = e => {
    e.stopPropagation()
  }

  const onSubmitModal = e => {
    e.preventDefault()
    if (
      nameModalInput.current.value.trim() &&
      phoneModalInput.current.value.trim() &&
      checkbox.current.checked
    ) {
      setSubmitModal(true)
      nameModalInput.current.value = ''
      phoneModalInput.current.value = ''
      checkbox.current.checked = false
      setTimeout(() => {
        closeModal()
        setSubmitModal(false)
      }, 3000)
    }
  }

  return (
    <div ref={modalRef} className={isModalOpen ? 'modal active' : 'modal'}>
      <div onClick={closeModal} className='modal__overlay'>
        <form
          onSubmit={onSubmitModal}
          onClick={stopBubbling}
          className='modal__content'
        >
          <div className='title'>Ваші контактні дані</div>
          <label htmlFor='username'>Ім'я</label>
          <input
            ref={nameModalInput}
            type='text'
            id='username'
            required
            placeholder="Ім'я"
          />
          <label htmlFor='phone-num'>Номер телефону</label>
          <input
            ref={phoneModalInput}
            type='tel'
            id='phone-num'
            required
            pattern='[0]{1}[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
            placeholder='067-506-45-06'
          />
          <div className='checkbox'>
            {' '}
            <input ref={checkbox} type='checkbox' id='check' required />
            <label htmlFor=''>
              я згоден(на) з{' '}
              <Link href='/privacy-policy' onClick={closeModal}>
                політикою конфіденційності
              </Link>
            </label>
          </div>
          {dynamicModalBtn}
          <div onClick={() => setIsModalOpen(false)} className='close-modal'>
            +
          </div>
        </form>
      </div>
    </div>
  )
}
export default Modal
