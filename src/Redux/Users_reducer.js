import {followAPI, usersAPI} from "../Api/Api";


let InitialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export function Users_reducer (state = InitialState, action){
    if(action.type === 'FOLLOW') {

        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.user_id) {
                    return {...u, followed: true}
                }
                return u;
            })
        }
    }

    else if (action.type === 'UNFOLLOW'){
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.user_id) {
                    return {...u, followed: false}
                }
                return u;
            })
        }
    }

    else if (action.type === 'SET_USERS'){

        return {
            ...state,
            users: action.users}
    }

    else if (action.type === 'SET_CURRENT_PAGE'){

        return {
            ...state,
            currentPage: action.currentPage}
    }

    else if (action.type === 'SET_TOTAL_USERS_COUNT'){

        return {
            ...state,
            totalUsersCount: action.totalUsersCount}
    }

    else if (action.type === 'TOGGLE_IS_FETCHING'){

        return {
            ...state,
            isFetching: action.isFetching}
    }

    else if (action.type === 'TOGGLE_FOLLOWING_PROGRESS'){

        return {
            ...state,
            followingInProgress: action.followingInProgress
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter( id => id != action.userId)


        }
    }

    else {
        return state;
    }

}

export function followSuccess(user_id){
    return {
        type: 'FOLLOW',
        user_id: user_id
    };
}

export function unfollowSuccess(user_id){
    return {
        type:'UNFOLLOW',
        user_id: user_id
    };
}

export function setUsers(users){
    return {
        type:'SET_USERS',
        users: users
    };
}

export function setCurrentPage(currentPage){
    return {
        type:'SET_CURRENT_PAGE',
        currentPage: currentPage
    };
}

export function setTotalUsersCount(totalUsersCount){
    return {
        type:'SET_TOTAL_USERS_COUNT',
        totalUsersCount: totalUsersCount
    };
}

export function toggleIsFetching(isFetching){
    return {
        type:'TOGGLE_IS_FETCHING',
        isFetching: isFetching
    };
}

export function toggleFollowingProgress(followingInProgress, userId){


    return {
        type:'TOGGLE_FOLLOWING_PROGRESS',
        followingInProgress: followingInProgress,
        userId: userId
    };

}

//Thunk Action Creators

export function getUsers(currentPage, pageSize) {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true))

        let response = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))

    }
}

export function follow(userid) {
    return async (dispatch) => {

        dispatch(toggleFollowingProgress(true, userid));

        let response = await followAPI.followUser(userid);

        if(response.resultCode === 0) {
            dispatch(followSuccess(userid))
        }

        dispatch(toggleFollowingProgress(false, userid))

    }
}

export function unfollow(userid) {
    return async (dispatch) => {

        dispatch(toggleFollowingProgress(true, userid))

        let response = await followAPI.unfollowUser(userid);

        if (response.resultCode === 0) {
            dispatch(unfollowSuccess(userid))
        }
        dispatch(toggleFollowingProgress(false, userid))
    }
}