import { DialogPage } from "../model/model"
import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from "./types";
import { AllActionTypes } from "./AllActionTypes";

const initialState:DialogPage = {
  Dialogs: [{
    UserName: 'User1 from top',
    ID: 1
  },
  {
    UserName: 'User2',
    ID: 2
  },
  {
    UserName: 'User3',
    ID: 3
  },
  {
    UserName: 'User4',
    ID: 4
  },
  {
    UserName: 'User5',
    ID: 5
  },
  {
    UserName: 'User6',
    ID: 6
  }],
  Messages: [{
    Text: 'Hi from top',
    ID: 1
  },
  {
    Text: 'Hello',
    ID: 2
  },
  {
    Text: 'How are u?',
    ID: 3
  },
  {
    Text: 'Yo!s',
    ID: 4
  }],
  NewMessageText: '',
  SendMessage:()=>{},
  UpdateText:(text:string)=>{}
}

const dialogsReducer = (state = initialState, action: AllActionTypes) => {
  debugger;
  switch (action.type) {
    case SEND_MESSAGE:
      state.Messages.push({
        ID: 10,
        Text: state.NewMessageText
      });
      state.NewMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.NewMessageText = action.text;
      break;
    default:
      break;
  }
  return state;
}
export default dialogsReducer;