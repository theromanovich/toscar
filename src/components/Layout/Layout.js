import Header from '../Header/Header'
import Footer from '../Footer/Footer'




const Layout = ({children}) => (
    <div>

        <Header/>
        {children}
        <Footer/>
    </div>
);

export default Layout;