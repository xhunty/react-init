import { ProfilePage } from "../model/model";
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const profileReducer = (state: ProfilePage, action: any) => {
  switch (action.type) {
    case ADD_POST:
      state.Posts.push({
        ID: 5,
        Message: state.NewPostText,
        Likes: 0
      });
      break;
    case UPDATE_NEW_POST_TEXT:
      state.NewPostText = action.newText;
      break;
    default:
      break;
  }
  return state;
}
export const addNewPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;