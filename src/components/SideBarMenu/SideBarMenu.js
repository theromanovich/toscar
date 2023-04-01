import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Modal from '../HowToBuy/Modal'
import { Telegram, Instagram, Youtube, Logo } from './SideBarIcons'
const links = [
  {
    id: 1,
    title: 'Головна',
    path: '/'
  },
  {
    id: 2,
    title: 'Каталог техніки',
    path: '/catalog'
  },
  {
    id: 3,
    title: 'Про компанію',
    path: '/information'
  },
  {
    id: 4,
    title: 'Відгуки',
    path: '/reviews'
  },
  {
    id: 5,
    title: 'Контакти',
    path: '/contacts'
  }
]

const SideBarMenu = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    setModalOpen(false)
  })
  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const navElements = links.map(({ id, title, path }) => (
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
            {/* tosei */}
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

export const BurgerMenu = ({ setMenuStatus, menuStatus }) => {
  useEffect(() => {
    if (document.querySelector('.sidebar').classList.contains('active')) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'auto'
  }, [menuStatus])
  const router = useRouter()

  const navElements = links.map(({ id, title, path }) => (
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
