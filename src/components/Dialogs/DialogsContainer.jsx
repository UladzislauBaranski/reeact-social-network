import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNewTextMessage: (valueText) => {
            dispatch(updateMessageActionCreator(valueText));
        },

        sendNewMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer;