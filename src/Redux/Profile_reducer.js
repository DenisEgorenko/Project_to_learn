
let initialState = {
    PostsData: [
        {id:1, message: 'Hi! How are you?', like_count: '5'},
        {id:2, message: "It's my first post", like_count: '15'},
        {id:3, message: 'Whats Up!', like_count: '25'},
        {id:4, message: 'So,What?', like_count: '35'},
        {id:5, message: 'Go with me!', like_count: '45'}
    ],
    newPostText: ''
}

export function Profile_reducer(state = initialState, action) {

    if (action.type === 'ADD-POST'){
        let data = {
            id:6,
            message: state.newPostText,
            like_count: '12'
        }

        let stateCopy = {...state}
        stateCopy.PostsData = [...state.PostsData]
        stateCopy.PostsData.push(data);
        stateCopy.newPostText = '';
        return stateCopy;
    }

    else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        let stateCopy = {...state}
        stateCopy.newPostText = action.newText;
        return stateCopy;
    } else {
        return state;
    }


}

export function addPostActionCreator(){
    return {
        type:'ADD-POST'
    };
}

export function updateNewPostTextActionCreator(text){
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText:text
    };
}