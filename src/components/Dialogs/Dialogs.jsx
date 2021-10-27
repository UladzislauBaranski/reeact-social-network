import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsUserElement = props.messagePage.dialogs.map(dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name}/>);
    let dialogsMessageElement = props.messagePage.messages.map(el => <Message message={el.message} key={el.id}/>);

    let onChangeNewTextMessage = (e) => {
        let valueText = e.target.value;
        props.changeNewTextMessage(valueText);
    }
    let onSendNewMessage = () => {
        props.sendNewMessage();
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
                        <textarea onChange={onChangeNewTextMessage} value={props.messagePage.newTextMessage}
                                  placeholder="enter your message" name="" id="" cols="30" rows="5"/>
                    </div>
                    <div>
                        <button onClick={onSendNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;