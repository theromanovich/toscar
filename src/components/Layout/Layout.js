import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero';
import Form from '../Form/Form';



const Layout = ({children}) => (
    <div>

        <Header/>
        <Hero/>
        {children}
        <Form/>
        <Footer/>
    </div>
);

export default Layout;