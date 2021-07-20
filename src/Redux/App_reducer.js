import {AuthAPI} from "../Api/Api";
import {Authorisation} from "./Auth_reducer";


let InitialState = {
    initialized: false
}


export function app_reducer(state = InitialState, action) {

    if (action.type === 'SET_INITIALIZED') {
        return {
            ...state,
            initialized: true
        }
    } else {
        return state;
    }

}

export function set_initialized() {
    return {
        type: 'SET_INITIALIZED'
    }
}


// Thunk Action Creators

export function initializeApp() {
    return (dispatch) => {
        let promise = dispatch(Authorisation())

        Promise.all([promise]).then(() => {
                    dispatch(set_initialized())
                }
            )
    }
}
