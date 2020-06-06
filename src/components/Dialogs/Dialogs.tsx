import React from 'react'
import css from './Dialogs.module.css'
import { DialogPage } from '../../model/model'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'


const Dialogs: React.FC<DialogPage> = (props) => {
    const messagesElements = props.Messages.map(message => <Message Text={message.Text} ID={message.ID} />)
    const dialogsElements = props.Dialogs.map(dialog => <DialogItem UserName={dialog.UserName} DialogID={dialog.ID} />)
    const text = props.NewMessageText;
    const newmessageRef = React.createRef<HTMLTextAreaElement>();
    const addNewMessageHandler = () => {
        props.SendMessage();      
    }
    const onTextChange = (ev:React.FormEvent<HTMLTextAreaElement>) => {
        props.UpdateText(ev.currentTarget.value);
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
                    <textarea onChange={onTextChange}  ref={newmessageRef} value={text}></textarea>                    
                </div>
                <div>
                    <button onClick = { addNewMessageHandler }>Send message</button>
                </div>                
            </div>            
        </div>
    )
}
export default Dialogs;