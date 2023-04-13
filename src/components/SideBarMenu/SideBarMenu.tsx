import Link from 'next/link'
import { links } from './links'
import Modal from '../HowToBuy/Modal'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { NavElement } from '../interfaces/interfaces'
import { Telegram, Instagram, Youtube, Logo } from './SideBarIcons'

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
