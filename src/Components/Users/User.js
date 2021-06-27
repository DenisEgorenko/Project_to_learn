import React from "react";
import def_photo from "../../../src/assets/Photos/def_photo.png"
import styles from "./User.module.css"


function User(props) {
    return (
        <div>
            <div>
                <img className={styles.user_img} src={props.photo != null ? props.photo : def_photo}/>
            </div>
            <div>
                {props.followed ? <button onClick={() => {props.unfollow(props.id)}}>Follow</button> : <button onClick={() => {props.follow(props.id)}}>Unfollow</button>}
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.status}
            </div>
        </div>

    )
}

export default User;