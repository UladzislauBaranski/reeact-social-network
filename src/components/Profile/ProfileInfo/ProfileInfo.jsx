import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}
export default ProfileInfo;