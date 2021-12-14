import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId == null) {
            userId = 2;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                updateStatus={this.props.updateStatus}/>
            </>
        )
    };
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
  //  withAuthRedirect
)(ProfileContainer);