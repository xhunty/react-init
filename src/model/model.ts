export type Store = {
    state:State
}
export type State = {
    profilePage:ProfilePage,
    dialogPage:DialogPage
}
export type ProfilePage = {
    Posts:PostProps[],
    NewPostText:string,
    addPost(postMessage: string) : void,
    updateNewPostText(newText:string) : void
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