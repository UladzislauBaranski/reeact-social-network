const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'how are you', likesCount: 1},
        {id: 2, message: 'hyhy', likesCount: 2},
        {id: 3, message: 'youout', likesCount: 13},
        {id: 4, message: 'wghat??', likesCount: 14},
        {id: 5, message: 'asdsadasascdfr', likesCount: 23},
    ],
    textMessage: 'it-it'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPostEntity = {
                id: 6,
                message: state.textMessage,
                likesCount: 16
            };
            return {
                ...state,
                posts: [...state.posts, newPostEntity],
                textMessage: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                textMessage: action.newText
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () => (
    {
        type: ADD_POST
    });

export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    });


export default profileReducer;