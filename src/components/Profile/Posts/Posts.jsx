import s from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormsControl";

const Posts = (props) => {
    let postElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>);

    let onSubmit = (formData) => {
        console.log(formData);
        props.addPost(formData.newPost);
    };

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div>
                {postElements}
            </div>
        </div>
    );
}
const maxLength30 = maxLengthCreator(30);
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} type="text" validate={[requiredField, maxLength30]}
                       placeholder={"post message"} name="newPost" id="" cols="30" rows="5"/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
};

const AddPostReduxForm = reduxForm({
    form: 'post',
})(AddPostForm);
export default Posts;