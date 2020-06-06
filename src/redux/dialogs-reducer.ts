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
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        Messages: [...state.Messages,{ID:1,Text:state.NewMessageText}],
        NewMessageText:''
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        NewMessageText:action.text
      }
      
    default:
      return state;
  }  
}
export default dialogsReducer;