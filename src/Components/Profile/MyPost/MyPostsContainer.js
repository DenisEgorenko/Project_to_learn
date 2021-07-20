import React from "react";
import {addPost, updateNewPostText} from "../../../Redux/Profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

function mapStateToProps(store){
    return{
        PostsData: store.profilePage.PostsData,
        newPostText: store.profilePage.newPostText
    }
}

export default connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(MyPosts);;

