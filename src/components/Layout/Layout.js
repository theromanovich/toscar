import SideBarMenu from '../SideBarMenu/SideBarMenu'
import { FilterProvider } from '@/helpers/filter-context/filter-context'
import ToseiHeader from '../ToseiHeader/ToseiHeader'
import ToseiFooter from '../ToseiFooter/ToseiFooter'

const Layout = ({ children }) => (
  <>
    <ToseiHeader />
    <SideBarMenu />
    <FilterProvider>{children}</FilterProvider>
    <ToseiFooter />
  </>
)

export default Layout
