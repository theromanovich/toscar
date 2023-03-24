import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Form from '../Form/Form'
import Blog from '../../../alpina-ui/src/components/Blog/Blog'
import DelivererCard from '../DelivererCard/DelivererCard'
import Filter from '../Filter/Filter'
import SideBarMenu from '../SideBarMenu/SideBarMenu'
import { FilterProvider } from '@/helpers/filter-context/filter-context'
const Layout = ({ children }) => (
  <>
    {/* <Header /> */}
    <SideBarMenu />
    <FilterProvider>
      {/* <Hero/> */}
      {children}
      {/* <Form/> */}
      {/* <Blog/> */}
    </FilterProvider>
    {/* <Footer /> */}
  </>
)

export default Layout
