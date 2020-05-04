import React from 'react';
import css from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePage } from '../../model/model';


const Profile: React.FC<ProfilePage> = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts Posts = {props.Posts} NewPostText={props.NewPostText} dispatch={props.dispatch}/>
    </div>)
}

export default Profile;