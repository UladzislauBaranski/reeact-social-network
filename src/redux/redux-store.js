import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let pullReducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    //  sidebar: sidebarReducer
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});
let store = createStore(pullReducers, applyMiddleware(thunkMiddleware));

export default store;