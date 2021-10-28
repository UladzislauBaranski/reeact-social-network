import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    width="300px"
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="qwe"/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava+desc
            </div>
        </div>
    );
}
export default ProfileInfo;