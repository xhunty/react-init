import React from 'react'
import css from './NavBar.module.css'

const NavBar: React.FC = () =>{
    return <nav className={css.nav}>
    <div className={`${css.item} ${css.active}`}>
      <a href="/profile">Profile</a>
    </div>
    <div className={css.item}>
      <a href="/dialogs">Messages</a>
    </div>
    <div className={css.item}>
      <a href="/news">News</a>
    </div>
    <div className={css.item}>
      <a href="/music">Music</a>
    </div>
    <div className={css.item}>
      <a href="/settings">Setttings</a>
    </div>
  </nav>
}

export default NavBar;