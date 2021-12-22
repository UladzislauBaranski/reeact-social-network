import {authAPI} from "../api/api";

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
                ...action.data
            }
        default:
            return state;
    }
}

/*action creators*/
export const setAuthUserDate = (userId, email, login, isAuth) => (
    {
        type: SET_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login,
            isAuth
        }
    });

/*export const log = (userId, email, login) => (
    {
        type: SET_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login
        }
    });*/

/*thunk creators*/
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.auth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserDate(id, email, login, true));
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    console.log(email, password, rememberMe);
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDate(null, null, null, false));
                }
            })
    }
}

export default authReducer;