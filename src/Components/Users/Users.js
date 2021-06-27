import React from "react";
import User from "./User";
import axios from "axios";
import styles from "./User.module.css";
import def_photo from "../../assets/Photos/def_photo.png";


function Users(props) {

    function getUsers() {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
                debugger
                props.setUsers(response.data.items)
            })
        }
        ;
    }

    return (

        <div className={styles.Users_Page}>

            <div>
                <button onClick={getUsers}>Найти пользователей</button>
            </div>

            {props.users.map((user) => <div className={styles.Users_Items}>

                <div>
                    <img src={user.photos.small != null ? user.photos.small : def_photo}/>
                </div>

                <div>
                    {user.followed ? <button onClick={() => {
                        user.unfollow(user.id)
                    }}>Follow</button> : <button onClick={() => {
                        user.follow(props.id)
                    }}>Unfollow</button>}
                </div>

                <div>
                    {user.name}
                </div>

                <div>
                    {user.status}
                </div>

            </div>)}

        </div>
    )
}

export default Users;


// {SingleUser}