export type Store = {
    state:State,
    subscriber:Function,
    subscribe:Function,
    getState: () => State,
    dispatch: (action: any) => void
}
export type State = {
    profilePage:ProfilePage,
    dialogPage:DialogPage,
    dispatch: Function
}
export type ProfilePage = {
    Posts:PostProps[],
    NewPostText:string,
    UpdateText: (text:string) => void,
    PublishPost: () => void
}
export type DialogPage = {
    Dialogs: DialogProps[],
    Messages:MessageProps[],
    NewMessageText:string,
    UpdateText: (text:string) => void,
    SendMessage:() => void
}
export type PostProps = {
    ID:number,
    Message:string,
    Likes:number
}
export type DialogProps = {
    UserName:string,
    ID:number
}
export type MessageProps = {
    Text:string,
    ID:number
}