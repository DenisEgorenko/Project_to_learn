import {AuthAPI} from "../Api/Api";


let InitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export function auth_reducer(state = InitialState, action) {
    if (action.type === 'SET_AUTH_USER_DATA') {
        return {
            ...state,
            ...action.data,
            isAuth: action.isAuth
        }
    } else {
        return state;
    }

}

export function set_auth_user_data(data, isAuth) {
    return {
        type: 'SET_AUTH_USER_DATA',
        data: data,
        isAuth: isAuth
    }
}


// Thunk Action Creators

export function Authorisation() {
    return async (dispatch) => {
        let response = await AuthAPI.authMe();

        if (response.resultCode === 0) {
            dispatch(set_auth_user_data(response.data, true))
        }
    }
}


export function logIn(data) {
    return async (dispatch) => {
        let response = await AuthAPI.logIn(data);

        if (response.resultCode === 0) {
            // alert("login successful")
            dispatch(Authorisation())
        }
    }
}

export function logOut() {
    return async (dispatch) => {
        let response = await AuthAPI.logOut();

        if (response.resultCode === 0) {
            // alert("logOut successful")
            dispatch(set_auth_user_data({id: null, email: null, login: null}, false))
        }
    }
}