import React from 'react';
import logo from './logo.svg';
import css from './Header.module.css';

const Header: React.FC = () =>{
    return <header className={css.app_header}>
                <img src={logo}></img>
            </header>
}
export default Header;