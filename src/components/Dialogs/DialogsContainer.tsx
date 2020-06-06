import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { updateNewMessageText, sendMessageActionCreator } from "../../redux/actions";
import { RootReducer } from "../../redux/redux-store";
const mapStateToProps = (state:RootReducer) => {
    return {
        Dialogs:state.dialogsReducer.Dialogs,
        Messages:state.dialogsReducer.Messages,
        NewMessageText:state.dialogsReducer.NewMessageText
    }}

const mapDispatchToProps = () => ({
    UpdateText: (text:string) => updateNewMessageText(text),
    SendMessage: () => sendMessageActionCreator()
})

const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogContainer;