import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer;