import Head from 'next/head'
import type { AppProps } from 'next/app'

import Layout from '../components/Layout/Layout'

import 'normalize.css/normalize.css'
import './../style/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <title>Toscar</title>
      <link
        href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap'
        rel='stylesheet'
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        rel='stylesheet'
      />
      <link
        rel='icon'
        type='image/svg+xml'
        href='favicon/car-emoji-favicon.ico'
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
)

export default MyApp
