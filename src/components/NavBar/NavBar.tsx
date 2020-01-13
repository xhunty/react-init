import React from 'react'
import css from './NavBar.module.css'

const NavBar: React.FC = () =>{
    return <nav className={css.nav}>
    <div className={`${css.item} ${css.active}`}>
      <a>Profile</a>
    </div>
    <div className={css.item}>
      <a>Messages</a>
    </div>
    <div className={css.item}>
      <a>News</a>
    </div>
    <div className={css.item}>
      <a>Music</a>
    </div>
    <div className={css.item}>
      <a>Setttings</a>
    </div>
  </nav>
}

export default NavBar;