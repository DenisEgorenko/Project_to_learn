import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";


function Profile() {
    return(
        <div>

            <div>
                <img className={styles.ava} src='https://sun9-51.userapi.com/impg/c855524/v855524622/1776e0/Ji-1LCe9zWk.jpg?size=2048x1536&quality=96&sign=b2e8afeed77615346935237cd2fe21de&type=album'/>
                Петр Иванов
            </div>

            <MyPosts/>

        </div>

    )
}

export default Profile


