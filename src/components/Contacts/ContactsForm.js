const ContactsForm = () => {
  return (
    <form className='contacts-form'>
      <div className='contacts-form__title'>Напишіть нам</div>
      <label htmlFor='name'>Ваше ім'я</label>
      <input type='text' id='name' placeholder="Ім'я" required />
      <label htmlFor='phone'>Контактний телефон</label>
      <input
        id='phone'
        required
        type='tel'
        name='phone'
        pattern='[0]{1}[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
        placeholder='067-506-45-06'
      />
      <label htmlFor='message'>Ваше повідомлення</label>
      <textarea
        name='message'
        required
        id='message'
        placeholder='Повідомлення'
      ></textarea>
      <button>Надіслати</button>
    </form>
  )
}
export default ContactsForm
