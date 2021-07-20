import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {

    let PostsElements = props.PostsData.map((post) => <Post message={post.message} like_count={post.like_count}/>)

    let newPostElement = React.createRef();

    function onPostChange() {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    function addPost() {
        props.addPost();
    };

    return (
        <div>

            <div className={styles.CreatePost}>

                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>

                <button onClick={addPost}>
                    Add Post
                </button>

            </div>

            <div className={styles.posts}>

                {PostsElements}

            </div>

        </div>
    )
}

export default React.memo(MyPosts);

