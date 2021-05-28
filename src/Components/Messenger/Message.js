import React from 'react';
import styles from "./Message.module.css";

function Message(props) {
    return (
        <div className={styles.message}>
            <img src='https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg'/>
            {props.message}
        </div>
    )
}

export default Message;