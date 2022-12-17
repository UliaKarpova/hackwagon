import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';
import headerLogo from '../../images/header-logo.png';

function Header({children}) {
  return (
    <header className="header">
      <div className='header__container'>
        <NavLink exact to="/" className="header__link">
          <img
            src={headerLogo}
            alt="Boris Cat's Secret"
            className="header__logo"
          />
        </NavLink>  
        {children}
      </div>
    </header>
  );
}

export default Header;