import {authAPI, usersAPI} from "../api/api";
import {followSuccess, setToggleIsFollowingProgress} from "./users-reducer";
import * as axios from "axios";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDate = (userId, email, login) => (
    {
        type: SET_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login
        }
    });

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.auth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    console.log('1:',id, login, email);
                    dispatch(setAuthUserDate(id, email, login));
                }
            })
    }
}

export default authReducer;