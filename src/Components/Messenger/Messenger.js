import React from "react";
import styles from "./Messenger.module.css"
import Messenger_Dialog from "./Messenger_Dialog";
import Message from "./Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Dialogs_reducer";


function Messenger(props) {

    let newMessageArea = React.createRef();

    let DialogsElements = props.DialogsData.map((dialog) => <Messenger_Dialog name={dialog.name} id={dialog.id}/>);

    let MessagesElements = props.MessagesData.map((message) => <Message message={message.message}/>)

    function onMessageChange(){
        let text = newMessageArea.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    function addMessage(){
        props.dispatch(addMessageActionCreator());
    }

    return (

        <div className={styles.messenger}>

            <div className={styles.dialogs_items}>

                {DialogsElements}

            </div>


            <div className={styles.messages}>

                {MessagesElements}

                <div className={styles.sendMessage}>

                    <textarea ref={newMessageArea} value={props.newMessageText} onChange={onMessageChange}>

                    </textarea>

                    <button onClick={addMessage}>
                        Отправить
                    </button>

                </div>

            </div>

        </div>

    )
}

export default Messenger;