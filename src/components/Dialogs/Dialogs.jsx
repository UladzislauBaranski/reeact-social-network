import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let dialogsUserElement = props.messagePage.dialogs.map(dialog => <DialogItem id={dialog.id} key={dialog.id}
                                                                                 name={dialog.name}/>);
    let dialogsMessageElement = props.messagePage.messages.map(el => <Message message={el.message} key={el.id}/>);


    let onSubmit = (formData) => {
        console.log(formData.newMessageBody) ;
        props.sendNewMessage(formData.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsUserElement}
            </div>

            <div className={classes.messages}>
                {dialogsMessageElement}


            <AddMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" type="text"
                       placeholder="enter your message" name="newMessageBody" id="" cols="30" rows="5"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({
    form: 'message',
})(AddMessageForm);

export default Dialogs;