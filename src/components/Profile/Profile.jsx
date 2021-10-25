import classes from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts profileData={props.profileData} dispatch={props.dispatch}/>
        </div>
    );
}
export default Profile;