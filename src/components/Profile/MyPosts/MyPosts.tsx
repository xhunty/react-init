import React from 'react';
import css from './MyPosts.module.css'
import { ProfilePage } from '../../../model/model';
import Post from './Post/Post';

const MyPosts: React.FC<ProfilePage> = (props) => {
    
    const postsElements = props.Posts.map( p => <Post ID ={p.ID} Message={p.Message} Likes={p.Likes} />)
    const newPostRef= React.createRef<HTMLTextAreaElement>();
    const addPostHandler = () => {
        //props.addPost(newPostRef.current?.value ?? '');
        props.dispatch({
            type:'ADD-POST'
        });
    }
    const onPostChangeHandler = (ev: React.FormEvent<HTMLTextAreaElement>) => {
        //props.updateNewPostText(ev.currentTarget.value)   
        props.dispatch({
            type:'UPDATE-NEW-POST-TEXT',
            newText:ev.currentTarget.value
        })     
    }
    return (
        <div className={css.posts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChangeHandler} ref = {newPostRef} value={props.NewPostText} />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add Post</button>
                </div>
            </div>
            <div >
                {postsElements}
            </div>
        </div>)
}
export default MyPosts;