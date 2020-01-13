import React from 'react'
import css from './Post.module.css'

const Post: React.FC = () =>{
    return(
        <div className={css.item}>post 1
            <img src='https://amp.spark.ru/public/img/user_ava_big.png'></img>
        </div>
    )
}
export default Post