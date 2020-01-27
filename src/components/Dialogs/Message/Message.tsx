import React from 'react'
import css from './Message.module.css'

export interface IMessageProps {
    Text: string
    ID:number
}

const Message: React.FC<IMessageProps> = (props) => {
    const { Text } = { ...props }
    return (
        <div className={css.message}>{Text}</div>
    )
}
export default Message;