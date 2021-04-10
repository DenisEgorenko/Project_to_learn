import React from "react";
import styles from './Post.module.css'


function Post(props) {
    return (
        <div className= {styles.item}>
            <img src='https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg'/>

            {props.message}

            <div>
                {props.like_count} Like
            </div>
        </div>

    )
}

export default Post;

