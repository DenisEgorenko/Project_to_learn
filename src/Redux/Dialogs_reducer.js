
let initialState = {
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
}

export function Dialogs_reducer(state = initialState, action) {

    if (action.type === 'ADD-MESSAGE'){
        let message = {
            id:6,
            message: state.newMessageText
        }

        let stateCopy = {...state}
        stateCopy.MessagesData = [...state.MessagesData]
        stateCopy.MessagesData.push(message);
        stateCopy.newMessageText = '';

        return stateCopy;
    }

    else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){

        let stateCopy = {...state}

        stateCopy.newMessageText = action.newMessage;

        return stateCopy;
    }

    else {
        return state;
    }

}


export function addMessageActionCreator(){
    return {
        type:'ADD-MESSAGE'
    };
}

export function updateNewMessageTextActionCreator(text){
    return {
        type:'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: text
    };
}