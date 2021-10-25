import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import {combineReducers, createStore} from "redux";


let pullReducers= combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
  //  sidebar: sidebarReducer
});
let store= createStore(pullReducers);

export default store;