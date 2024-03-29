import SideBarMenu from '../SideBarMenu/SideBarMenu'
import ToseiHeader from '../ToseiHeader/ToseiHeader'
import ToseiFooter from '../ToseiFooter/ToseiFooter'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <ToseiHeader />
    <SideBarMenu />
    {children}
    <ToseiFooter />
  </>
)

export default Layout
