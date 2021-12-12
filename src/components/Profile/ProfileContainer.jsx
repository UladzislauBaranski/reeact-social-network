import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
      /*  let userId = this.props.match.params.userId;
        if (userId == null) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })*/

        let userId = this.props.match.params.userId;
        if (userId == null) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);