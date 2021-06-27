import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Dialogs_reducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";


function mapStateToProps(store){
    return{
        DialogsData: store.messengerPage.DialogsData,
        MessagesData: store.messengerPage.MessagesData,
        newMessageText: store.messengerPage.newMessageText
    }
}

function mapDispatchToProps(dispatch){
    return{
        addMessage: ()=> dispatch(addMessageActionCreator()),
        updateNewMessageText: (text)=> dispatch(updateNewMessageTextActionCreator(text))
    }
}

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;