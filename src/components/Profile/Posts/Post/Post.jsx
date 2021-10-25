import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.img}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}
export default Post;