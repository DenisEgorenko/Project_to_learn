import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

function mapStateToProps(store){
    return{
        PostsData: store.profilePage.PostsData,
        newPostText: store.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch){
    return{
        addPost: ()=>dispatch(addPostActionCreator()),
        updateNewPostText: (text)=>dispatch(updateNewPostTextActionCreator(text))
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

