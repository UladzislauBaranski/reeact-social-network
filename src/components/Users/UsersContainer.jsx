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
import Users from "./Users";
import Preloader from "./../Common/Preloader/Preloader"
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
                this.props.setToggleIsFetching(false);
            })
    }

    onPageChanged = (page) => {
        this.props.setPage(page);
        this.props.setToggleIsFetching(true);
            usersAPI.getUsers(page, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items);
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setPage,
    setUsers,
    setTotalUsersCount,
    setToggleIsFetching
})(UsersContainer)