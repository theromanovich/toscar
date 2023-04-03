import SideBarMenu from '../SideBarMenu/SideBarMenu'
import ToseiHeader from '../ToseiHeader/ToseiHeader'
import ToseiFooter from '../ToseiFooter/ToseiFooter'

const Layout = ({ children }) => (
  <>
    <ToseiHeader />
    <SideBarMenu />
    {children}
    <ToseiFooter />
  </>
)

export default Layout
