import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let pullReducers= combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
  //  sidebar: sidebarReducer
    usersPage: usersReducer,
    auth: authReducer
});
let store= createStore(pullReducers);

export default store;