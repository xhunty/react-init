export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

export type SendMessage = {
    type: typeof SEND_MESSAGE
}
export type AddPost = {
    type: typeof ADD_POST
}
export type UpdateNewPostText = {
    type: typeof UPDATE_NEW_POST_TEXT,
    text: string
}
export type UpdateNewMessageText = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    text: string
}