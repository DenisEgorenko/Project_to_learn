import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Profile_reducer";

function MyPosts(props) {

    let PostsElements = props.data.map((post) => <Post message = {post.message} like_count = {post.like_count}/>)

    let newPostElement = React.createRef();

    function onPostChange() {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));

    };

    function AddPost() {
        props.dispatch(addPostActionCreator());
    };

    return(
        <div>

            <div className={styles.CreatePost}>

                <textarea ref = {newPostElement} value={props.newPostText} onChange={onPostChange}/>

                <button onClick={AddPost}>
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

