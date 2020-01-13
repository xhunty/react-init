import React from 'react';
import css from './Profile.module.css'

const Profile: React.FC = () =>{
    return <div className={css.content}>
    <div className={css.page_logo}>
      <img className={css.page_logo_img} src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg"></img>
    </div>
    <div>ava + descr</div>
    <div className={css.posts}>
      my posts
      <div className={css.item}>post 2</div>
      <div className={css.item}>post 3</div>
      <div className={css.item}>post 4</div>
      <div className={css.item}>post 1</div>
    </div>
  </div>
}

export default Profile;