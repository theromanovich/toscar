import Head from 'next/head'
import Contacts from '../../components/Contacts/Contacts'

const contactsPage = () => {
  return (
    <>
      <Head>
        <title>Контакти</title>
      </Head>
      <Contacts />
    </>
  )
}
export default contactsPage
