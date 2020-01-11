import React from 'react';
import logo from '../logo.svg';

const Header: React.FC = () =>{
    return <header className="app-header">
                <img src={logo}></img>
            </header>
}
export default Header;