import Link from 'next/link';
import Logo from "../Header/Logo";

const navigationFooter = [
    {
        id: 1,
        title: 'Overview',
        path: '/'
    },
    {
        id: 2,
        title: 'Features',
        path: '/master'
    },
    {
        id: 3,
        title: 'Pricing',
        path: '/blog'
    },
    {
        id: 4,
        title: 'Careers',
        path: '/about'
    },
    {
        id: 5,
        title: 'Help',
        path: '/about'
    },
    {
        id: 6,
        title: 'Privacy',
        path: '/about'
    }
]

const Footer = () => (
    <div className='footer'>
        <div className="container footer__container">
            <Logo></Logo>
            <div className="footer__menu">
                {navigationFooter.map(item => {
                    const {id, title, path} = item;
                    return <li key={id}><Link href={path}>{title}</Link></li>
                })}
            </div>
            <div className="footer__copy">
                © 2077 Untitled UI
            </div>
        </div>

    </div>
);

export default Footer;