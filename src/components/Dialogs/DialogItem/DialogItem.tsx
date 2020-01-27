import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './DialogItem.module.css'

export interface IDialogItemProps {
    UserName: string
    DialogID: number
}
const DialogItem: React.FC<IDialogItemProps> = (props) => {
    const { UserName, DialogID } = { ...props }
    return (
        <div className={css.dialog}>
            <NavLink to={`/dialogs/${DialogID}`}>{UserName}</NavLink>
        </div>
    )
}
export default DialogItem;