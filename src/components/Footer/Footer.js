import React from 'react';
import logo from './../../logo.svg';
import './Footer.css';

function Footer() {
  return (
      <footer className="footer">
          <div className="container">
              <img src={logo} className="logo" alt="logo" />
          </div>
      </footer>
  );
}

export default Footer;
