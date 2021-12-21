import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'how are you', likesCount: 1},
        {id: 2, message: 'hyhy', likesCount: 2},
        {id: 3, message: 'youout', likesCount: 13},
        {id: 4, message: 'wghat??', likesCount: 14},
        {id: 5, message: 'asdsadasascdfr', likesCount: 23},
    ],
    textMessage: 'it-it',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPostEntity = {
                id: 6,
                message: action.newPostText,
                likesCount: 16
            };
            return {
                ...state,
                posts: [...state.posts, newPostEntity],
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
}

export const addPost = (newPostText) => (
    {
        type: ADD_POST,
        newPostText
    });


export const setUserProfile = (profile) => (
    {
        type: SET_USER_PROFILE,
        profile: profile
    });

export const setStatus = (status) => (
    {
        type: SET_STATUS,
        status: status
    });

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}
export default profileReducer;