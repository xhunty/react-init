import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts: React.FC = () =>{
    return(   
        <div className={css.posts}>my posts
            <Post />
        </div>)
}
export default MyPosts;