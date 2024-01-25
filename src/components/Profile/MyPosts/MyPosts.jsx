import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    console.log(props)
    let postsElements = props.posts.map(posts => <Post message={posts.message} likes={posts.likeCount} />);
    let newPostElement = React.createRef();

    return (
        <div>
            <div className={style.newPostForm}>
                <div>
                    <textarea ref={newPostElement} className={style.new_post}></textarea>
                </div>

                <button onClick={props.addPost} className={style.add_post}>Add Post</button>

                <div className="posts">
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
