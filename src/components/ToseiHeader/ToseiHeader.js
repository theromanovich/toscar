import { useState } from 'react'
import { Logo } from '../SideBarMenu/SideBarIcons'
import SideBarMenu from '../SideBarMenu/SideBarMenu'
import { BurgerMenu } from '../SideBarMenu/SideBarMenu'

const ToseiHeader = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='logo'>
          <Logo height={40} width={140} />
        </div>
        <div className='header__title'>
          Автомобілі зі CША та доставкою по всій Україні.
        </div>
        <div className='header__phone'>
          <span>+38(067)506-45-06</span>
          <span>Безкоштовні дзвінки по всій Україні</span>
        </div>
        <div
          onClick={() => setBurgerMenu(!burgerMenu)}
          className={`header__burger ${burgerMenu ? 'active' : ''}`}
        >
          <span></span>
          <span></span>
        </div>
        <BurgerMenu setMenuStatus={setBurgerMenu} menuStatus={burgerMenu} />
      </div>
    </div>
  )
}
export default ToseiHeader
