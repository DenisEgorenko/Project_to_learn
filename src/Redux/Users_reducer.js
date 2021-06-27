

let InitialState = {
    users: []
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
        debugger
        return {
            ...state,
            users: [...state.users, ...action.users]}
    }

    else {
        return state;
    }

}

export function followAC(user_id){
    return {
        type: 'FOLLOW',
        user_id: user_id
    };
}

export function unfollowAC(user_id){
    return {
        type:'UNFOLLOW',
        user_id: user_id
    };
}

export function setUsersAC(users){
    return {
        type:'SET_USERS',
        users: users
    };
}