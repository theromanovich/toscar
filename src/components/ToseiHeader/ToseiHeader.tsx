import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '../SideBarMenu/SideBarIcons'
import { BurgerMenu } from '../SideBarMenu/BurgerMenu'

const ToseiHeader = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='logo'>
          <Link href='/'>
            <Logo height={40} width={140} />
          </Link>
        </div>
        <div className='header__title'>
          Автомобілі зі CША та доставкою по всій Україні.
        </div>
        <div className='header__phone'>
          <a href='tel:+380675064506'>+38(067)506-45-06</a>
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
