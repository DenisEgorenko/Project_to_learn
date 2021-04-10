import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";


function MyPosts() {
    return(
        <div>

            My post

            <div>

                <textarea></textarea>
                <button>
                    Add Post
                </button>

            </div>

            <div className={styles.posts}>

                <Post message = 'Hi! How are you?' like_count = '5'/>
                <Post message = "It's my first post" like_count = '15'/>
                <Post message = 'Something 1' like_count = '25'/>
                <Post message = 'Something 2' like_count = '35'/>
                <Post message = 'Something 3' like_count = '45'/>

            </div>

        </div>
    )
}

export default MyPosts;

