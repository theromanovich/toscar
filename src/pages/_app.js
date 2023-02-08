import Head from "next/head";

import Layout from '../components/Layout/Layout';

import 'normalize.css/normalize.css';
import './../style/global.scss'

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Head>
            <link href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap' rel='stylesheet'/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout>
);

export default MyApp;