import Link from 'next/link'
import { links } from './links'
import { useRouter } from 'next/router'
import { NavElement } from '../interfaces/interfaces'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Instagram, Telegram, Youtube } from './SideBarIcons'

interface BurgerProps {
  setMenuStatus: Dispatch<SetStateAction<boolean>>
  menuStatus: boolean
}

export const BurgerMenu = ({ setMenuStatus, menuStatus }: BurgerProps) => {
  const router = useRouter()

  useEffect(() => {
    if (document.querySelector('.sidebar').classList.contains('active')) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'auto'
  }, [menuStatus])

  const navElements = links.map(({ id, title, path }: NavElement) => (
    <li
      className={`sidebar__menu-item ${
        router.pathname == path ? 'active' : ''
      }`}
      key={id}
    >
      <Link onClick={() => setMenuStatus(false)} href={path}>
        {title}
      </Link>
    </li>
  ))

  return (
    <div className={`sidebar ${menuStatus && 'active'}`}>
      <div className='blur' onClick={() => setMenuStatus(false)}>
        <div
          className='sidebar__container'
          onClick={e => e.stopPropagation()}
          style={{
            transition: 'transform 0.3s linear',
            transform: `${
              menuStatus ? 'translate(0%, 0px)' : 'translate(-100%, 0px)'
            }`
          }}
        >
          <ul className='sidebar__menu'>{navElements}</ul>
          <div className='schedule'>
            <div>
              <div>пн-пт</div>
              <div>сб</div>
              <div>нд</div>
            </div>
            <div>
              <div>10:00 - 19:00</div>
              <div>10:00 - 17:00</div>
              <div>10:00 - 15:00</div>
            </div>
          </div>
          <div className='sidebar__icons'>
            <Telegram />
            <Instagram />
            <Youtube />
          </div>
        </div>
      </div>
    </div>
  )
}
