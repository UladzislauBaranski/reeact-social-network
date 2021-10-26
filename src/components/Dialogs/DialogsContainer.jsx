import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let changeNewTextMessage = (valueText) => {
        let action = updateMessageActionCreator(valueText);
        props.store.dispatch(action);
    }
    let sendNewMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    }

    return (
        <Dialogs dialogs={props.store.getState().messagePage.dialogs}
                 messages={props.store.getState().messagePage.messages}
                 newTextMessage={props.store.getState().messagePage.newTextMessage}
                 changeNewTextMessage={changeNewTextMessage}
                 sendNewMessage={sendNewMessage}/>
    );
}
export default DialogsContainer;