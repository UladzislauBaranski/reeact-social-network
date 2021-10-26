import s from "./Posts.module.css";

import Post from "./Post/Post";
import React from "react";

const Posts = (props) => {
    console.log("props", props)
    let postElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>);

    let newPostEl = React.createRef();

    let onAddPost = () => {
        props.addPost();

    };

    let onPostChange = () => {
        let textareaMessage = newPostEl.current.value;
        props.updateNewPostText(textareaMessage);
    };


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.textMessage} onChange={onPostChange} ref={newPostEl} name="" id=""
                          cols="30" rows="10"/>
                <button onClick={onAddPost}>
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