import {Profile_reducer} from "./Profile_reducer";
import {Dialogs_reducer} from "./Dialogs_reducer";


let store = {
    _state: {
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
    },

    _callSubscriber(){

    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    getState(){
        return this._state;
    },

    dispatch(action){

        Profile_reducer(this._state.profilePage, action);
        Dialogs_reducer(this._state.messengerPage, action);

        this._callSubscriber()
    }
}

export default store;