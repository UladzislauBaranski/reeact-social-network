import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let updatePostMessage = (textareaMessage) => {
       let action = updateNewPostTextActionCreator(textareaMessage);
        props.store.dispatch(action);

    };

    return (
       <Posts posts={props.store.getState().profilePage.posts}
              textMessage={props.store.getState().profilePage.textMessage}
              addPost={addPost}
              updateNewPostText={updatePostMessage}/>
    );
}
export default PostsContainer;