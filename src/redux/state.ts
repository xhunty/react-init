import { Store, PostProps } from "../model/model"

const store: Store = {
  state: {
    profilePage: {
      Posts: [
        {
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
        }
      ],
      NewPostText: 'new post text',
      addPost: (postMessage: string) => {
        console.log('add posr func -->', postMessage);
        const newPost: PostProps = {
          ID: 5,
          Message: postMessage,
          Likes: 0
        }
        store.state.profilePage.Posts.push(newPost);
      }
    },
    dialogPage: {
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
      Messages: [
        {
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
        }
      ]
    }
  }
}
export default store;