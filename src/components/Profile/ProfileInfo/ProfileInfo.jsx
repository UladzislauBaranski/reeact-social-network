import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    width="300px"
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="qwe"/>
            </div>

            <div className={s.descriptionBlock}>
                ava+desc
            </div>
        </div>
    );
}
export default ProfileInfo;