import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Form from '../Form/Form'
// import Blog from '../../../alpina-ui/src/components/Blog/Blog'
import DelivererCard from '../DelivererCard/DelivererCard'
import Filter from '../Filter/Filter'
import SideBarMenu from '../SideBarMenu/SideBarMenu'
import { FilterProvider } from '@/helpers/filter-context/filter-context'
import ToseiHeader from '../ToseiHeader/ToseiHeader'
import MainPage from '../MainPage/MainPage'
import MainPageFilter from '../MainPageFilter/MainPageFilter'
import ToseiFooter from '../ToseiFooter/ToseiFooter'

const Layout = ({ children }) => (
  <>
    {/* <Header /> */}
    <ToseiHeader />
    <SideBarMenu />
    <FilterProvider>
      {/* <MainPageFilter> */}
      {/* <Hero/> */}
      {children}
      {/* <Form/> */}
      {/* </MainPageFilter> */}
    </FilterProvider>
    <ToseiFooter />
  </>
)

export default Layout
