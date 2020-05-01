import React from 'react'
import css from './Dialogs.module.css'
import { DialogPage } from '../../model/model'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { sendMessageActionCreator } from '../../redux/state'


const Dialogs: React.FC<DialogPage> = (props) => {
    const messagesElements = props.Messages.map(message => <Message Text={message.Text} ID={message.ID} />)
    const dialogsElements = props.Dialogs.map(dialog => <DialogItem UserName={dialog.UserName} DialogID={dialog.ID} />)
    const newmessageRef = React.createRef<HTMLTextAreaElement>();
    const addNewMessageHandler = () => {
        const action = sendMessageActionCreator(newmessageRef.current?.value ?? '');
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