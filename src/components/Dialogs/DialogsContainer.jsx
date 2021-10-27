import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;