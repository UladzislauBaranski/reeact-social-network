import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        /* axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
             {withCredentials: true})*/
        /*     authAPI.auth()
                 .then(response => {
                if (response.data.resultCode===0){
                    let {id, login, email}=response.data.data;
                    this.props.setAuthUserDate(id, email, login);
                }
                 })*/
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    };
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);