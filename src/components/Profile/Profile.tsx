import React from 'react';
import css from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile: React.FC = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>)
}

export default Profile;