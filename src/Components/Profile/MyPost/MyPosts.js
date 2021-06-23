import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {

    let PostsElements = props.data.map((post) => <Post message = {post.message} like_count = {post.like_count}/>)

    let newPostElement = React.createRef();

    function onPostChange() {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };

    return(
        <div>

            <div className={styles.CreatePost}>

                <textarea ref = {newPostElement} value={props.newPostText} onChange={onPostChange}/>

                <button onClick={props.addPost}>
                    Add Post
                </button>

            </div>

            <div className={styles.posts}>

                {PostsElements}

            </div>

        </div>
    )
}

export default MyPosts;

