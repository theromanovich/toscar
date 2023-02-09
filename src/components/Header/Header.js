import Link from 'next/link';
import Logo from './Logo'
const navigation = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'Products',
        path: '/master'
    },
    {
        id: 3,
        title: 'Resources',
        path: '/blog'
    },
    {
        id: 4,
        title: 'Pricing',
        path: '/about'
    }
]

const Header = () => (
    <div className='header'>
        <div className='container header__container'>
            
            <div className="header__info">
                <div className="header__info-item">

                        <Logo />

                    <h2>
                        Untitled UI
                    </h2>
                </div>
                <nav className='nav'>
                    <ul className='nav__menu'>
                        {navigation.map(({id, title, path}) => (
                            <li className='nav__menu-item' key={id}><Link href={path}>{title}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>

            
            <div className="header__button">
                <button>Sign Up</button>
            </div>
            
        </div>
        <hr />
    
    </div>
);

export default Header;