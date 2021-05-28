import React from "react";
import styles from "./Messenger.module.css"
import Messenger_Dialog from "./Messenger_Dialog";
import Message from "./Message";


function Messenger(props) {

    let newMessageArea = React.createRef();

    function sendMessage() {
        let Message = newMessageArea.current.value;
        return(alert(Message))
    }

    let DialogsElements = props.DialogsData.map((dialog) => <Messenger_Dialog name={dialog.name} id={dialog.id}/>);

    let MessagesElements = props.MessagesData.map((message) => <Message message={message.message}/>)

    return (

        <div className={styles.messenger}>

            <div className={styles.dialogs_items}>

                {DialogsElements}

            </div>


            <div className={styles.messages}>

                {MessagesElements}

                <div className={styles.sendMessage}>

                    <textarea ref={newMessageArea}>

                    </textarea>

                    <button onClick={sendMessage}>
                        Отправить
                    </button>

                </div>

            </div>

        </div>

    )
}

export default Messenger;