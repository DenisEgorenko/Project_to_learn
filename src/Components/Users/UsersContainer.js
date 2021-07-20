import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow,
} from "../../Redux/Users_reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: getUsers,
        follow,
        unfollow
    }),
    withAuthRedirect
)(UsersContainer);

