import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {

    return (
        <div>
            <img src="./img/person-icon.png" className={styles.ava} />
            <p>{props.message}</p>
            <div>
                <span>{props.likes} Likes</span>
            </div>
        </div>
    );
};

export default Post; 