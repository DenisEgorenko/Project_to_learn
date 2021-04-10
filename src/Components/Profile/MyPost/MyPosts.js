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

                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>

        </div>
    )
}

export default MyPosts;

