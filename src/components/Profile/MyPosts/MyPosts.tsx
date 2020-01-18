import React from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts: React.FC = () => {
    return (
        <div className={css.posts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div >
                <Post message='Hi, how are you?' likes={14} />
                <Post message='Its my first post' likes={123} />
                <Post message='Its my first post' likes={123} />
                <Post message='Its my first post' likes={123} />
                <Post message='Its my first post' likes={123} />
                <Post message='Its my first post' likes={123} />
                <Post message='Its my first post' likes={123} />
            </div>
        </div>)
}
export default MyPosts;