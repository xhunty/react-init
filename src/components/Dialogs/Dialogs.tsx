import React from 'react'
import css from './Dialogs.module.css'
import DialogItem, { IDialogItemProps } from './DialogItem/DialogItem'
import Message,{IMessageProps} from './Message/Message'

export interface IDialogsProps{
    dialogs:IDialogItemProps[],
    messaes:IMessageProps[]
}

const Dialogs: React.FC<IDialogsProps> = (props) => {
    const messagesElements = props.messaes.map(message => <Message Text={message.Text} ID={message.ID} />)
    const dialogsElements = props.dialogs.map(dialog => <DialogItem UserName={dialog.UserName} DialogID={dialog.DialogID} />)
    const newmessageRef = React.createRef<HTMLTextAreaElement>();
    const addNewMessageHandler = () => {
        alert(newmessageRef.current?.value);
    }
    return (
        <div className={css.dialogs}>
            <div className={css.dialog_items}>                
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea ref={newmessageRef}></textarea>                    
                </div>
                <div>
                    <button onClick = { addNewMessageHandler }>Send message</button>
                </div>                
            </div>            
        </div>
    )
}
export default Dialogs;