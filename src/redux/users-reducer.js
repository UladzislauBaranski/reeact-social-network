const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
    //textMessage: 'it-it'
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
             //   users: [...state.users, ...action.users]
                users: [...action.users]
            }

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

export const followAC = (userId) => (
    {
        type: FOLLOW,
        userId: userId
    });

export const unfollowAC = (userId) => (
    {
        type: UNFOLLOW,
        userId
    });

export const setUsersAC = (users) => (
    {
        type: SET_USERS,
        users: users
    });

export const setPageAC = (page) => (
    {
        type: SET_PAGE,
        currentPage: page
    });

export const setTotalUsersCountAC = (usersCount) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: usersCount
    });

export const setIsFetchingAC = (isFetching) => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    });


export default usersReducer;