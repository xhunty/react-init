import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import { ProfilePage, DialogPage } from "../model/model";

const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer
})

const store = createStore(rootReducer);
export type RootReducer = {
    profileReducer: ProfilePage,
    dialogsReducer: DialogPage
}
export default store;