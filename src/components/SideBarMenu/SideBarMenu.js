import Link from 'next/link'
import { useRouter } from 'next/router'
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
    title: 'Інформація',
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
            tosei
          </Link>
        </div>
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
  )
}
export default SideBarMenu
