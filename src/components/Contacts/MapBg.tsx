import ContactsForm from './ContactsForm'
const MapBg = () => {
  return (
    <div className='map__wrapper'>
      <iframe
        className='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010.4978823182518!2d30.517416600500365!3d50.46825932043809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce151337d78f%3A0x65128e936be12e9a!2z0LLRg9C70LjRhtGPINCS0L7Qu9C-0YHRjNC60LAsIDI0LzM3LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1679769183506!5m2!1suk!2sua'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
      <ContactsForm />
    </div>
  )
}
export default MapBg
