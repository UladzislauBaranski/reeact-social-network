import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "./../../../StoreContext";

const PostsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                };

                let updatePostMessage = (textareaMessage) => {
                    let action = updateNewPostTextActionCreator(textareaMessage);
                    store.dispatch(action);

                };


                return <Posts posts={state.profilePage.posts}
                              textMessage={state.profilePage.textMessage}
                              addPost={addPost}
                              updateNewPostText={updatePostMessage}/>

            }
        }
        </StoreContext.Consumer>
    );
}
export default PostsContainer;