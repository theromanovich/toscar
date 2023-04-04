import Contacts from '../../components/Contacts/Contacts'
import Head from 'next/head'

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
