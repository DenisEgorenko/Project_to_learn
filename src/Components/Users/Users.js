import React from "react";
import styles from "./Users.module.css";
import def_photo from "../../Assets/Photos/def_photo.png";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return <div className={styles.Users_Page}>

        {props.users.map((user) => <div className={styles.Users_Items}>

            <div className={styles.Photo}>
                <NavLink to={"/Profile/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : def_photo}/>
                </NavLink>
            </div>

            <div className={styles.Button}>
                {user.followed

                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {

                        props.unfollow(user.id);

                    }}>Unfollow</button>

                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {

                        props.follow(user.id);

                    }}>Follow</button>}
            </div>

            <div className={styles.Name}>
                {user.name}
            </div>

            <div className={styles.Status}>
                {user.status}
            </div>

            <div className={styles.City}>
                Taganrog
            </div>

        </div>)}

        <Paginator currentPage={props.currentPage}
                   totalUsersCount={props.totalUsersCount}
                   onPageChanged={props.onPageChanged}
                   pageSize={props.pageSize}
                   portionSize = {10}/>

    </div>
}

export default Users;