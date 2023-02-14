import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero';
import Form from '../Form/Form';
import Blog from '../Blog/Blog';


const Layout = ({children}) => (
    <div>

        <Header/>
        <Hero/>
        {children}
        <Form/>
        <Blog/>
        <Footer/>
    </div>
);

export default Layout;