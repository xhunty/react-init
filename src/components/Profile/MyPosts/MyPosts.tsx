import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts: React.FC = () =>{
    return(   
        <div className={css.posts}>my posts
            <Post message='Hi, how are you?' likes={14}/>
            <Post message='Its my first post' likes={123}/>
        </div>)
}
export default MyPosts;