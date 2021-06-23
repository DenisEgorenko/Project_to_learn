function rerenderEntireTree(){

}

let state = {
    profilePage: {
        PostsData: [
            {id:1, message: 'Hi! How are you?', like_count: '5'},
            {id:2, message: "It's my first post", like_count: '15'},
            {id:3, message: 'Whats Up!', like_count: '25'},
            {id:4, message: 'So,What?', like_count: '35'},
            {id:5, message: 'Go with me!', like_count: '45'}
        ],
        newPostText: ''
    },

    messengerPage: {
        MessagesData: [
            {id:1, message: 'Hi!'},
            {id:2, message: 'How are you?'},
            {id:3, message: 'Whats Up!'},
            {id:4, message: 'So,What?'},
            {id:5, message: 'Go with me!'}
        ],
        DialogsData: [
            {id:1, name: 'Дима'},
            {id:2, name: 'Маша'},
            {id:3, name: 'Даша'},
            {id:4, name: 'Виктор'},
            {id:5, name: 'Петр'}
        ],

        newMessageText: ''
    },
}

window.state = state;

export function addPost() {
    let data = {
        id:6,
        message: state.profilePage.newPostText,
        like_count: '12'
    }

    state.profilePage.PostsData.push(data);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export function updateNewPostText(newText) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export function addMessage(){
    let message = {
        id:6,
        message: state.messengerPage.newMessageText
    }

    state.messengerPage.MessagesData.push(message);
    state.messengerPage.newMessageText = '';
    rerenderEntireTree(state)
}
export function updateNewMessageText(newMessage){
    state.messengerPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export function subscribe(observer){
    rerenderEntireTree = observer;
}

export default state;