import React from "react";
import styles from "../Profile.module.css";
import Preloader from "../../Common/Preloader";
import ProfileStatus from "../ProfileStatus";
import def_photo from "../../../Assets/Photos/def_photo.png";



function ProfileInfo (props){

    const onMainPhotoSelect = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    } else {
        debugger
        return <div>
            <div>
                <img className={styles.ava} src={props.profile.photos.large || def_photo}/>
            </div>
            <div>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelect}/>}
            </div>
            <div>
                {props.profile.fullName}
            </div>

            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    }
}

export default ProfileInfo