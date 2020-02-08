import { IMyPostsProps } from "../components/Profile/MyPosts/MyPosts"
import { IDialogItemProps } from "../components/Dialogs/DialogItem/DialogItem"
import { IMessageProps } from "../components/Dialogs/Message/Message"

const _posts:IMyPostsProps = {
    allposts : [{
      id:1,
      message:'message1 test app top',
      likes:12
    },{
      id:2,
      message:'message2',
      likes:123
    },{
      id:3,
      message:'message3',
      likes:1234
    },{
      id:4,
      message:'message4',
      likes:1235
    },{
      id:5,
      message:'message5',
      likes:6
    },{
      id:6,
      message:'message6',
      likes:1237
    },{
      id:7,
      message:'message7',
      likes:1238
    }],
    status:'test'
}
const _dialogsData: IDialogItemProps[] = [{
    UserName: 'User1 from top',
    DialogID: 1
},
{
    UserName: 'User2',
    DialogID: 2
},
{
    UserName: 'User3',
    DialogID: 3
},
{
    UserName: 'User4',
    DialogID: 4
},
{
    UserName: 'User5',
    DialogID: 5
},
{
    UserName: 'User6',
    DialogID: 6
}]
const _messagesData: IMessageProps[]=[{
    Text:'Hi from top',
    ID:1
},{
    Text:'Hello',
    ID:2
},{
    Text:'How are u?',
    ID:3
},{
    Text:'Yo!s',
    ID:4
}]

export interface IState{
    posts:IMyPostsProps,
    dialogs:IDialogItemProps[],
    messages:IMessageProps[]
}
const state: IState = {
    posts : _posts,
    dialogs : _dialogsData,
    messages : _messagesData
}
export default state;