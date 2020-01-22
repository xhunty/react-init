import React from 'react';
import css from './MyPosts.module.css'
import Post, { IPostProps } from './Post/Post';

const _postsData: IPostProps[]=[{
    id:1,
    message:'message1',
    likes:12
},{
    id:2,
    message:'message2',
    likes:123
},{
    id:3,
    message:'message3',
    likes:1234
},{
    id:4,
    message:'message4',
    likes:1235
},{
    id:5,
    message:'message5',
    likes:6
},{
    id:6,
    message:'message6',
    likes:1237
},{
    id:7,
    message:'message7',
    likes:1238
}]
const postsElements = _postsData.map( p => <Post id={p.id} message={p.message} likes={p.likes} />)
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
                {postsElements}
            </div>
        </div>)
}
export default MyPosts;