import Link from 'next/link'
import { Whatsapp, Instagram, Youtube, Logo } from './SideBarIcons'
const links = [
  {
    id: 1,
    title: 'Головна',
    path: '/'
  },
  {
    id: 2,
    title: 'Каталог техніки',
    path: '/blog'
  },
  {
    id: 3,
    title: 'Інформація',
    path: '/form'
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
const navElements = links.map(({ id, title, path }) => (
  <li className='sidebar__menu-item' key={id}>
    <Link href={path}>{title}</Link>
  </li>
))

const SideBarMenu = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <div className='logo'>
          <Logo />
          tosei
        </div>
        <ul className='sidebar__menu'>{navElements}</ul>
        <div className='sidebar__icons'>
          <Whatsapp />
          <Instagram />
          <Youtube />
        </div>
      </div>
    </div>
  )
}
export default SideBarMenu
