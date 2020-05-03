import React from 'react'
import css from './Dialogs.module.css'
import { DialogPage } from '../../model/model'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { sendMessageActionCreator, updateNewMessageText } from '../../redux/dialogs-reducer'


const Dialogs: React.FC<DialogPage> = (props) => {
    const messagesElements = props.Messages.map(message => <Message Text={message.Text} ID={message.ID} />)
    const dialogsElements = props.Dialogs.map(dialog => <DialogItem UserName={dialog.UserName} DialogID={dialog.ID} />)
    const text = props.NewMessageText;
    const newmessageRef = React.createRef<HTMLTextAreaElement>();
    const addNewMessageHandler = () => {
        const action = sendMessageActionCreator();
        props.dispatch(action);        
    }
    const onTextChange = (ev:React.FormEvent<HTMLTextAreaElement>) => {
        const action = updateNewMessageText(ev.currentTarget.value);
        props.dispatch(action);
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