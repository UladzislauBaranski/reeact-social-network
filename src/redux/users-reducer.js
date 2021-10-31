import {act} from "react-dom/test-utils";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(id=>id!==action.userId)
            }

        default:
            return state;
    }
}

export const follow = (userId) => (
    {
        type: FOLLOW,
        userId: userId
    });

export const unfollow = (userId) => (
    {
        type: UNFOLLOW,
        userId
    });

export const setUsers = (users) => (
    {
        type: SET_USERS,
        users: users
    });

export const setPage = (page) => (
    {
        type: SET_PAGE,
        currentPage: page
    });

export const setTotalUsersCount = (usersCount) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: usersCount
    });

export const setToggleIsFetching = (isFetching) => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    });

export const setToggleIsFollowingProgress = (followingInProgress, userId) => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress: followingInProgress,
        userId
    });


export default usersReducer;