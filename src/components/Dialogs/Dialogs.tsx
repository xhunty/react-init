import React from 'react'
import css from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

interface IDialogItemProps {
    UserName: string
    DialogID: number
}
interface IMessageProps {
    Text: string
}
const _dialogsData: IDialogItemProps[] = [{
    UserName: 'User1',
    DialogID: 1
},
{
    UserName: 'User2',
    DialogID: 2
},
{
    UserName: 'User3',
    DialogID: 3
},
{
    UserName: 'User4',
    DialogID: 4
},
{
    UserName: 'User5',
    DialogID: 5
},
{
    UserName: 'User6',
    DialogID: 6
}]
const DialogItem: React.FC<IDialogItemProps> = (props) => {
    const { UserName, DialogID } = { ...props }
    return (
        <div className={css.dialog}>
            <NavLink to={`/dialogs/${DialogID}`}>{UserName}</NavLink>
        </div>
    )
}
const Message: React.FC<IMessageProps> = (props) => {
    const { Text } = { ...props }
    return (
        <div className={css.message}>{Text}</div>
    )
}
const Dialogs: React.FC = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialog_items}>
                <DialogItem UserName="User1" DialogID={1} />
                <DialogItem UserName="User2" DialogID={2} />
                <DialogItem UserName="User3" DialogID={3} />
                <DialogItem UserName="User4" DialogID={4} />
                <DialogItem UserName="User5" DialogID={5} />
                <DialogItem UserName="User6" DialogID={6} />
            </div>
            <div className={css.messages}>
                <Message Text="Hi" />
                <Message Text="Hello" />
                <Message Text="How are u?" />
                <Message Text="Yo!s" />
            </div>
        </div>
    )
}
export default Dialogs;