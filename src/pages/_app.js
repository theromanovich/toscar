import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout>
);

export default MyApp;