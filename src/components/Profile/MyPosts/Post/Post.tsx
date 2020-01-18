import React from 'react'
import css from './Post.module.css'

export interface IPostProps{
    message:string
    likes:number
    id:number
}
const Post: React.FC<IPostProps> = (props) =>{
    const {message,likes} = {...props};
    return(
        <div className={css.item}>
            <div>
                <img src='https://amp.spark.ru/public/img/user_ava_big.png'></img>
            </div>
            <div>{message}</div>
            <span>likes:{likes}</span>
        </div>
    )
}
export default Post