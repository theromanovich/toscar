import Link from 'next/link'
import { links } from './links'
import Modal from '../HowToBuy/Modal'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { Telegram, Instagram, Youtube, Logo } from './SideBarIcons'

interface NavElement {
  id: number
  title: string
  path: string
}

const SideBarMenu = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  useEffect(() => {
    setModalOpen(false)
  })
  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const navElements = links.map(({ id, title, path }: NavElement) => (
    <li
      className={`sidebar__menu-item ${
        router.pathname == path ? 'active' : ''
      }`}
      key={id}
    >
      <Link href={path}>{title}</Link>
    </li>
  ))

  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <div className='logo'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <ul className='sidebar__menu'>{navElements}</ul>
        <button onClick={() => setModalOpen(true)}>Зв'язатись</button>
        <Modal modalStatus={modalOpen} onClose={handleCloseModal} />
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
  )
}
export default SideBarMenu

interface BurgerProps {
  setMenuStatus: Dispatch<SetStateAction<boolean>>
  menuStatus: boolean
}

export const BurgerMenu = ({ setMenuStatus, menuStatus }: BurgerProps) => {
  useEffect(() => {
    if (document.querySelector('.sidebar').classList.contains('active')) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'auto'
  }, [menuStatus])
  const router = useRouter()

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
