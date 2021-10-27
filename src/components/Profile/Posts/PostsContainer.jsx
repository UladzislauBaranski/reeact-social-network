import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textMessage: state.profilePage.textMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        updatePostMessage: (textareaMessage) => {
            let action = updateNewPostTextActionCreator(textareaMessage);
            dispatch(action);
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;