import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero';




const Layout = ({children}) => (
    <div>

        <Header/>
        <Hero/>
        {children}
        <Footer/>
    </div>
);

export default Layout;