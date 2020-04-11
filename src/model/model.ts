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
    dispatch: Function
}
export type DialogPage = {
    Dialogs: DialogProps[],
    Messages:MessageProps[]
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