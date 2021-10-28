import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setToggleIsFetching,
    setPage,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "./../Common/Preloader/Preloader"

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setToggleIsFetching(false);
            })
    }

    onPageChanged = (page) => {
        this.props.setPage(page);
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setToggleIsFetching(false);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/

/*export default connect(mapStateToProps,
    {
        follow: followAC,
        unfollow:unfollowAC,
        setPage: setPageAC,
        setUsers: setUsersAC,
        setTotalUsersCount: setTotalUsersCountAC,
        setToggleIsFetching: setIsFetchingAC})(UsersContainer)*/

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setPage,
    setUsers,
    setTotalUsersCount,
    setToggleIsFetching
})(UsersContainer)