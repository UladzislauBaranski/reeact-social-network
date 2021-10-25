import s from "./Posts.module.css";

import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const Posts = (props) => {
    let postElements = props.profileData.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>);

    let newPostEl = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    };

    let updatePostMessage = () => {
        let textareaMessage = newPostEl.current.value;
       let action = updateNewPostTextActionCreator(textareaMessage);
        console.log(action.newText)
        props.dispatch(action);
    };


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
            <textarea value={props.profileData.textMessage} onChange={updatePostMessage} ref={newPostEl} name="" id="" cols="30" rows="10"/>
                <button onClick={addPost}>
                    Add post
                </button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}
export default Posts;