import React from 'react'
import css from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

interface IDialogItemProps {
    UserName: string
    DialogID: number
}
interface IMessageProps {
    Text: string
    ID:number
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
const _messagesData: IMessageProps[]=[{
    Text:'Hi',
    ID:1
},{
    Text:'Hello',
    ID:2
},{
    Text:'How are u?',
    ID:3
},{
    Text:'Yo!s',
    ID:4
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
const messagesElements = _messagesData.map(message => <Message Text={message.Text} ID={message.ID} />)
const dialogsElements = _dialogsData.map(dialog => <DialogItem UserName={dialog.UserName} DialogID={dialog.DialogID} />)
const Dialogs: React.FC = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialog_items}>                
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;