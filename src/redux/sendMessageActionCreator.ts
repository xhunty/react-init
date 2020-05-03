import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT, ADD_POST, UPDATE_NEW_POST_TEXT } from "./types";
import { AllActionTypes } from "./AllActionTypes";
export const sendMessageActionCreator = (): AllActionTypes => ({ type: SEND_MESSAGE });
export const updateNewMessageText = (text: string): AllActionTypes => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });
export const addNewPostActionCreator = (): AllActionTypes => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text: string): AllActionTypes => {
    return ({ type: UPDATE_NEW_POST_TEXT, text: text });
};
