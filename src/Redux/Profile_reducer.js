import {usersAPI} from "../Api/Api";

let initialState = {
    PostsData: [
        {id: 1, message: 'Hi! How are you?', like_count: '5'},
        {id: 2, message: "It's my first post", like_count: '15'},
        {id: 3, message: 'Whats Up!', like_count: '25'},
        {id: 4, message: 'So,What?', like_count: '35'},
        {id: 5, message: 'Go with me!', like_count: '45'}
    ],
    profile: null,
    status: "",
    newPostText: ''
}

export function Profile_reducer(state = initialState, action) {

    if (action.type === 'ADD-POST') {
        let data = {
            id: 6,
            message: state.newPostText,
            like_count: '12'
        }

        let stateCopy = {...state}
        stateCopy.PostsData = [...state.PostsData]
        stateCopy.PostsData.push(data);
        stateCopy.newPostText = '';
        return stateCopy;
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        return {
            ...state,
            newPostText: action.newText
        }
    } else if (action.type === 'SET_USER_PROFILE') {
        return {
            ...state,
            profile: action.profile
        }
    } else if (action.type === 'SET_USER_STATUS') {
        return {
            ...state,
            status: action.status
        }
    } else if (action.type === 'SET_PHOTO') {
        return {
            ...state,
            profile: {...state.profile, photos: action.photo}
        }
    } else {
        return state;
    }

}

export function addPost() {
    return {
        type: 'ADD-POST'
    };
}

export function updateNewPostText(text) {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    };
}

export function setUserProfile(profile) {
    return {
        type: 'SET_USER_PROFILE',
        profile: profile
    };
}

export function setUserStatus(status) {
    return {
        type: 'SET_USER_STATUS',
        status: status
    };
}

export function setPhoto(photo) {
    return {
        type: 'SET_PHOTO',
        photo: photo
    };
}



//Thunk Action Creators

export function getProfile(userid) {
    return (dispatch) => {
        usersAPI.getProfile(userid).then((response) => {

            dispatch(setUserProfile(response.data));

        })
    }
}

export function getStatus(userid) {
    return (dispatch) => {
        usersAPI.getStatus(userid).then((response) => {

            dispatch(setUserStatus(response.data));

        })
    }
}

export function updateStatus(status) {
    return (dispatch) => {
        usersAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0){
                dispatch(setUserStatus(status));
            }
        })
    }
}

export function uploadPhoto(photo) {
    return (dispatch) => {
        usersAPI.uploadPhoto(photo).then((response) => {
            if (response.data.resultCode === 0){
                dispatch(setPhoto(response.data.data.photos));
            }
        })
    }
}