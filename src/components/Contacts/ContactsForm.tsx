import { useRef, useState, useEffect } from 'react'

const ContactsForm = () => {
  const nameInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const messageInput = useRef<HTMLTextAreaElement>(null)
  const [submitState, setSubmitState] = useState<boolean>(false)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      nameInput.current.value.trim() &&
      phoneInput.current.value.trim() &&
      messageInput.current.value.trim()
    ) {
      setSubmitState(true)
      nameInput.current.value = ''
      phoneInput.current.value = ''
      messageInput.current.value = ''
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (submitState) setSubmitState(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [submitState])

  const setDynamicBtn = (): JSX.Element => {
    return submitState ? (
      <button disabled style={{ background: 'green' }}>
        Відправлено
      </button>
    ) : (
      <button>Надіслати</button>
    )
  }

  const dynamicBtn = setDynamicBtn()

  return (
    <form className='contacts-form' onSubmit={submitHandler}>
      <div className='contacts-form__title'>Напишіть нам</div>
      <label htmlFor='name'>Ваше ім'я</label>
      <input
        ref={nameInput}
        type='text'
        id='name'
        placeholder="Ім'я"
        required
      />
      <label htmlFor='phone'>Контактний телефон</label>
      <input
        ref={phoneInput}
        id='phone'
        required
        type='tel'
        name='phone'
        pattern='[0]{1}[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
        placeholder='067-506-45-06'
      />
      <label htmlFor='message'>Ваше повідомлення</label>
      <textarea
        ref={messageInput}
        name='message'
        required
        id='message'
        placeholder='Повідомлення'
      ></textarea>
      {dynamicBtn}
    </form>
  )
}
export default ContactsForm
