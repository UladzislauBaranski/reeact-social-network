import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "./../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();

                let changeNewTextMessage = (valueText) => {
                    let action = updateMessageActionCreator(valueText);
                    store.dispatch(action);
                }
                let sendNewMessage = () => {
                    let action = sendMessageActionCreator();
                    store.dispatch(action);
                }

             return   <Dialogs dialogs={state.messagePage.dialogs}
                 messages={state.messagePage.messages}
                 newTextMessage={state.messagePage.newTextMessage}
                 changeNewTextMessage={changeNewTextMessage}
                 sendNewMessage={sendNewMessage}/>
            }
        }
        </StoreContext.Consumer>
    );
}
export default DialogsContainer;