import { Store,  State } from "../model/model"


class TheStore implements Store{
  constructor(){
    this.state = {
      profilePage : {
        Posts:[{
          ID: 1,
          Message: 'message1 test app top',
          Likes: 12
        }, {
          ID: 2,
          Message: 'message2',
          Likes: 123
        }, {
          ID: 3,
          Message: 'message3',
          Likes: 1234
        }, {
          ID: 4,
          Message: 'message4',
          Likes: 1235
        }, {
          ID: 5,
          Message: 'message5',
          Likes: 6
        }, {
          ID: 6,
          Message: 'message6',
          Likes: 1237
        }, {
          ID: 7,
          Message: 'message7',
          Likes: 1238
        }],
        NewPostText:'',
        dispatch(){
          console.log('fake');
        }
      },
      dialogPage:{
        Dialogs:[{
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
        Messages:[{
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
        }]
      },
      dispatch(){
        console.log('fake');
      }
    }
    this.subscriber = () =>{
      console.log('no subs')
    }
  }
  state:State
  subscriber:Function
  subscribe(observer:Function){
    this.subscriber = observer
  }
  getState(){
    return this.state;
  }
  dispatch(action:any){
    if(action.type === 'ADD-POST'){
      this.state.profilePage.Posts.push({
        ID:5,
        Message:this.state.profilePage.NewPostText,
        Likes:0
      });
      this.subscriber(this.state);
    }
    else if(action.type === 'UPDATE-NEW-POST-TEXT'){
      this.state.profilePage.NewPostText = action.newText;
      this.subscriber(this.state);
    }
  }
}

const store = new TheStore();
export default store;