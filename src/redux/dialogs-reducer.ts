import { DialogPage } from "../model/model"
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const dialogsReducer = (state: DialogPage, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      state.Messages.push({
        ID: 10,
        Text: state.NewMessageText
      });
      state.NewMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.NewMessageText = action.newText;
      break;
    default:
      break;
  }
  return state;
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageText = (text: string) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export default dialogsReducer;