import React from 'react';
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfo from "./Profile_Info/Profile_Info";

function Profile(props) {

    return(
        <div>

            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>

        </div>

    )
}

export default Profile


