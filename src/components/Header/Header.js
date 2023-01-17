import React from 'react';
import logo from '../../logo.svg';

import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} className="logo" alt="logo"/>
                <nav>
                    <ul>
                        <li>
                            <a href="/">home</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
