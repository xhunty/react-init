import React from 'react'
import css from './Post.module.css'
import { PostProps } from '../../../../model/model';


const Post: React.FC<PostProps> = (props) =>{
    const {Message,Likes} = {...props};
    return(
        <div className={css.item}>
            <div>
                <img src='https://amp.spark.ru/public/img/user_ava_big.png'></img>
            </div>
            <div>{Message}</div>
            <span>likes:{Likes}</span>
        </div>
    )
}
export default Post