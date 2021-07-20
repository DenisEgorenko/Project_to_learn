import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Dialogs_reducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";




function mapStateToProps(store){
    return{
        DialogsData: store.messengerPage.DialogsData,
        MessagesData: store.messengerPage.MessagesData,
        newMessageText: store.messengerPage.newMessageText,
        isAuth: store.auth.isAuth
    }
}

function mapDispatchToProps(dispatch){
    return{
        addMessage: ()=> dispatch(addMessageActionCreator()),
        updateNewMessageText: (text)=> dispatch(updateNewMessageTextActionCreator(text))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messenger);
