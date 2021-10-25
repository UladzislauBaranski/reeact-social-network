import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/message-reducer";

const Dialogs = (props) => {
    let dialogsUserElement = props.dialogsData.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let dialogsMessageElement = props.dialogsData.messages.map(el => <Message message={el.message}/>);

    let changeNewTextMessage=(e)=>{
        let valueText = e.target.value;
        let action = updateMessageActionCreator(valueText);
        props.dispatch(action);
    }
    let sendNewMessage=()=>{
        let action = sendMessageActionCreator();
        props.dispatch(action);
      //  props._store.dispatch(action);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsUserElement}
            </div>

            <div className={classes.messages}>
                {dialogsMessageElement}
                <div>
                    <div>
                        <textarea onChange={changeNewTextMessage} value={props.newTextMessage} placeholder="enter your message" name="" id="" cols="30" rows="5"/>
                    </div>
                    <div>
                        <button onClick={sendNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;