import React from "react";
import styles from "./Messenger.module.css"
import Messenger_Dialog from "./Messenger_Dialog";
import Message from "./Message";


function Messenger(){
    return(
        <div className = {styles.dialogs}>

            <div className = {styles.dialogs_items}>

                <Messenger_Dialog name = 'Дима' id = '1'/>
                <Messenger_Dialog name = 'Маша' id = '2'/>

            </div>


            <div className = {styles.messages}>

                <Message message = 'Hi'/>
                <Message message = 'How are you?'/>
                <Message message = 'Whats Up'/>

            </div>
        </div>
    )
}

export default Messenger;