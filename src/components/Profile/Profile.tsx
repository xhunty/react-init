import React from 'react';
import css from './Profile.module.css'
import MyPosts, { IMyPostsProps } from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile: React.FC<IMyPostsProps> = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts allposts = {props.allposts} status ="test"/>
    </div>)
}

export default Profile;