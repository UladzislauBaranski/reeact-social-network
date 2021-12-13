import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/message-reducer";
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
        changeNewTextMessage: (valueText) => {
            dispatch(updateMessageActionCreator(valueText));
        },

        sendNewMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}
//вместо
//let AuthRedirectComponent = withAuthRedirect(Dialogs);
//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

//это
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);