import React from 'react';
import css from './MyPosts.module.css'
import Post, { IPostProps } from './Post/Post';


export interface IMyPostsProps{
    allposts:IPostProps[],
    status:string
}
const MyPosts: React.FC<IMyPostsProps> = (props) => {
    const postsElements = props.allposts.map( p => <Post id={p.id} message={p.message} likes={p.likes} />)
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