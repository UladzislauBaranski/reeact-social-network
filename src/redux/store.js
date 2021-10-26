/*
let postData = [
    {id: 1, message: 'how are you', likesCount: 1},
    {id: 2, message: 'hyhy', likesCount: 2},
    {id: 3, message: 'youout', likesCount: 13},
    {id: 4, message: 'wghat??', likesCount: 14},
    {id: 5, message: 'asdsadasascdfr', likesCount: 23},
];

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'SSS'},
    {id: 3, name: 'AA'},
    {id: 4, name: 'Sas'},
    {id: 5, name: 'dsdde'},
];

let dialogsMessage = [
    {id: 1, message: 'wewe'},
    {id: 2, message: 'SSqweS'},
    {id: 3, message: 'wwwqdass'},
    {id: 4, message: 'wedsd'},
    {id: 5, message: 'asdsadasascdfr'},
];

import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'how are you', likesCount: 1},
                {id: 2, message: 'hyhy', likesCount: 2},
                {id: 3, message: 'youout', likesCount: 13},
                {id: 4, message: 'wghat??', likesCount: 14},
                {id: 5, message: 'asdsadasascdfr', likesCount: 23},
            ],
            textMessage: 'it-it',
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'SSS'},
                {id: 3, name: 'AA'},
                {id: 4, name: 'Sas'},
                {id: 5, name: 'dsdde'},
            ],
            messages: [
                {id: 1, message: 'wewe'},
                {id: 2, message: 'SSqweS'},
                {id: 3, message: 'wwwqdass'},
                {id: 4, message: 'wedsd'},
                {id: 5, message: 'asdsadasascdfr'},
            ],
            newTextMessage: 'new message',
        },
        sidebar: {},
    },

    _rerenderTemplateTree() {
        // console.log('state changed');
        alert('state changed');
    },

    setState(state) {
        this._state = state;
    },

    getState() {
        return this._state;
    },

    subscriber(observer) {
        this._rerenderTemplateTree = observer;
    },

    dispatch(action) {
/!*
             let profileReducer1 = profileReducer(this._state.profilePage, action);
             this._state.profilePage.posts.push(profileReducer1);*!/

        this._state.profilePage = profileReducer(this._state.profilePage, action);

     /!*   let messageReducer1 = messageReducer(this._state.messagePage, action);
        this._state.messagePage.messages.push(messageReducer1);*!/
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        //this._state.sidebar = messageReducer(this._state.messagePage, action);

        this._rerenderTemplateTree(this._state);

    }
}

export default store;



*/
