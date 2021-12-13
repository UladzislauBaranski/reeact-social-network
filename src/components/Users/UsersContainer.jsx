import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setToggleIsFetching,
    setPage,
    setTotalUsersCount,
    setUsers,
    unfollow, setToggleIsFollowingProgress, getUsersThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "./../Common/Preloader/Preloader"
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        //вместо этого
        /*    this.props.setPage(page);
            this.props.setToggleIsFetching(true);
            usersAPI.getUsers(page, this.props.pageSize)
                .then(data => {
                    this.props.setUsers(data.items);
                    this.props.setToggleIsFetching(false);
                })*/
        //это: thunk
        this.props.getUsersThunkCreator(page, this.props.pageSize);

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   followingProgress={this.props.followingProgress}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   setToggleIsFollowingProgress={this.props.setToggleIsFollowingProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setPage,
    //  setUsers,
    //  setTotalUsersCount,
    setToggleIsFetching,
    setToggleIsFollowingProgress,
    getUsersThunkCreator
})(UsersContainer)