import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/Users_reducer";



function mapStateToProps(store){
    return{
        users: store.usersPage.users
    }
}

function mapDispatchToProps(dispatch){
    return{
        follow: (user_id) => dispatch(followAC(user_id)),
        unfollow: (user_id) => dispatch(unfollowAC(user_id)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;