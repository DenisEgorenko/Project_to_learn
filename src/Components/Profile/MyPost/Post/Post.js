import React from "react";
import styles from './Post.module.css'


function Post() {
    return (
        <div className={styles.item}>
            <img src='https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg'/>
            Post
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}

export default Post;

