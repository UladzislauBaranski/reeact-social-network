import {sendMessageActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
  //  withAuthRedirect
)(Dialogs);