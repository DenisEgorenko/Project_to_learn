import React from 'react';
import styles from "./Messenger_Dialog.module.css";
import {NavLink} from "react-router-dom";


function Messenger_Dialog(props) {

    let path = '/messenger/' + props.id;

    return(
        <div className = {styles.dialog}>
            <NavLink activeClassName = {styles.activeLink} to = {path}>{props.name}</NavLink>
        </div>
    )
}

export default Messenger_Dialog;