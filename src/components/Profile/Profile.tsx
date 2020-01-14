import React from 'react';
import css from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile: React.FC = () =>{
    return <div>
    <div className={css.page_logo}>
      <img className={css.page_logo_img} src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg"></img>
    </div>
    <div>ava + descr</div>
    <MyPosts />
  </div>
}

export default Profile;