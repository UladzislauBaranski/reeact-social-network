import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import * as axios from "axios";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
       // this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                this.props.setUserProfile(response.data);
            //    this.props.setToggleIsFetching(false);
            })
    }

    render() {
        return (
            <>
              <Profile {...this.props} profile={this.props.profile}/>
                </>
        )
    };
}

const mapStateToProps=(state)=>{
   return {
       profile: state.usersPage.profile,
      isFetching: state.usersPage.isFetching
   }
}

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);