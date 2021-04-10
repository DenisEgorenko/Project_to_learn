import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";


function Profile() {
    return(
        <div>
            <img className={styles.img} src='https://media.radissonhotels.net/image/destination-pages/localattraction/16256-118729-f63243387_3xl.jpg?impolicy=HomeHero'/>

            <div>
                Ava + descr
            </div>

            <MyPosts/>

        </div>

    )
}

export default Profile


