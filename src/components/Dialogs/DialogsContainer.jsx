import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newTextMessage: state.messagePage.newTextMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNewTextMessage: (valueText) => {
            let action = updateMessageActionCreator(valueText);
            dispatch(action);
        },
        sendNewMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;