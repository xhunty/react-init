import { ProfilePage } from "../model/model";
import { ADD_POST, UPDATE_NEW_POST_TEXT } from "./types";
import { AllActionTypes } from "./AllActionTypes";

const initialState: ProfilePage = {
  Posts: [{
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
  NewPostText: ''
}

const profileReducer = (state = initialState, action: AllActionTypes) => {
  switch (action.type) {
    case ADD_POST:
      state.Posts.push({
        ID: 5,
        Message: state.NewPostText,
        Likes: 0
      });
      break;
    case UPDATE_NEW_POST_TEXT:
      state.NewPostText = action.text;
      break;
    default:
      break;
  }
  return state;
}
export default profileReducer;